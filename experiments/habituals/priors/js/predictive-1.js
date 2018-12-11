function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      $("#n_trials").html(exp.n_trials);
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.catch = slide({
     name : "catch",
     start: function() {
      this.startTime = Date.now();
            $(".err").hide();
     },
    button : function() {
      var response1 = $("#catch1").val()
      var response2 = $("#catch2").val()
      if ((response1 == -1) || (response2 == -1)) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        exp.go();
      }
    },
    log_responses : function() {
      var response1 = $("#catch1").val()
      var response2 = $("#catch2").val()
      exp.catch_trials.push({
        "trial_type" : "catch",
        "response1" : response1,
        "response2" : response2,
        "pass": (response1 == 1 && response2==1)? 1 : 0,
        "rt":this.rt
      });
    }
  });

  slides.single_trial = slide({
    name: "single_trial",

    present: exp.stims,

    present_handle : function(stim0) {

      var condition = stim0[0]
      var stim = stim0[1]
      this.startTime = Date.now()
      this.stim =  stim;
      this.trialNum = exp.stimscopy.indexOf(stim0);

      //$("#text_response").val('')
      //Instead of text_response now using time_frequency and time_comparison
      $("#time_frequency").val('')
      $("#time_comparison").val('')
      $(".err").hide();


      this.condition = condition

      var freq = stim.prevent_test_freq[0]

      this.stim.freq = "3"
      this.stim.interval = freq

      $(".frequency").html("In the <strong>past " + freq + "</strong>, " +
         stim.character.name  + " " + stim.past + " <em>3 times</em>.");

      var possessive = condition == "baseline"? "" : stim[condition]["requires"] == "possessive" ?
        stim.character.gender == "male" ? "his " :
                                          "her " :
                                          ""
       var pronoun = condition == "baseline"? "" : stim[condition]["requires"] == "pronoun" ?
        stim.character.gender == "male" ? "he " : "she "  : ""

      var extraSentence = condition == "baseline" ? "" :
        "Yesterday, " + stim.character.name + " " + stim[condition]["verb"] + " " +
        possessive + pronoun +  stim[condition]["obj"]+  "."

      $(".extraSentence").html(extraSentence)

      this.extraSentence = extraSentence

      $(".question").html("In the <strong>next " + freq + "</strong>, how many times do you think " + stim.character.name + " will " + stim.verb + "?")

    },

    button : function() {
      responses = [$("#time_frequency").val()]
      if (_.contains(responses, ""))  {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {

      exp.data_trials.push({
        "trial_type" : "predictive",
        "trial_num": this.trialNum+1,
        "item": this.stim.habitual,
        "condition": this.condition,
        "past_freq": this.stim.freq,
        "past_interval":this.stim.interval,
        "category": this.stim.category,
        "extra_sentence": this.extraSentence,
        "character": this.stim.character.name,
        "gender": this.stim.character.gender,
        //Response the time frequency and interval is the time comparison
        "response" :  $("#time_frequency").val(),
        "interval" : $("#time_comparison").val(),
        "rt":this.rt
      });
    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

  repeatWorker = false;
  (function(){
      var ut_id = "mht-habituals-20160113";
      /*
      *if (UTWorkerLimitReached(ut_id)) {
      *  $('.slide').empty();
      *  repeatWorker = true;
      *  alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
      */
  })();

  exp.trials = [];
  exp.catch_trials = [];

  exp.womenFirst = _.sample([true, false])
  // debugger;

  var usuableStims = _.filter(stimuli, function(x){return _.has(x, "preventative")})

  var bothGenders = [];
  var nBothGender = _.filter(stimuli, function(s){return _.contains(bothGenders,s.habitual)}).length

  var shuffledMen = _.shuffle(maleCharacters)
  var someMen = shuffledMen.splice(0,nBothGender)

  var shuffledWomen = _.shuffle(femaleCharacters)
  var someWomen = shuffledWomen.splice(0,nBothGender)

  var allGenders = _.shuffle(_.flatten([shuffledMen, shuffledWomen]))
  var stimsWNames =  _.shuffle(_.flatten(_.map(usuableStims, function(s){
    var newObj = jQuery.extend(true, {}, s);
    return !(_.contains(bothGenders,s.habitual)) ?
    _.extend(s, {character: allGenders.pop()}) :
      [_.extendOwn(s, {character: someMen.pop()}),
      _.extendOwn(newObj, {character: someWomen.pop()})]
  }), true))

  var conditions  = _.shuffle(_.flatten(utils.fillArray(["preventative","enabling", "baseline"],stimsWNames.length/3)))

  var allPossibleStims = _.flatten(_.map(stimsWNames,
    function(s){
      return _.map(["preventative","enabling", "baseline"], function(c){
        return [c, s]
      })
    }), true)

  exp.stims = _.zip(conditions, stimsWNames)
  exp.stimscopy = exp.stims.slice(0);
  exp.n_trials = exp.stims.length

  // exp.condition = _.sample(["CONDITION 1", "condition 2"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "single_trial", 'subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
