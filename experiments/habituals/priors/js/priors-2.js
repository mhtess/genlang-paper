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
    
    present: exp.stimuli,

    present_handle : function(stim) {
      this.startTime = Date.now()
      this.stim =  stim; 
      this.trialNum = exp.stimscopy.indexOf(stim);

      $("#n_people_a").val('')
      $("#n_people_b").val('')

      $("#comparison_a").val('1000')
      $("#comparison_b").val('1000')

      $("#text_response_a").val('')
      $("#text_response_b").val('')

      $("#frequency_a").val('year')
      $("#frequency_b").val('year')

      $(".err").hide();

      var menQ = "How many American men do you think have <strong>" + stim.past + "</strong> before?<br>"
      var womenQ =  "How many American women do you think have <strong> " + stim.past + "</strong> before?<br>"
      var menQ2 = "For a typical man who has " + stim.past + " before, how frequently does he <strong>" + stim.present + "</strong>?"
      var womenQ2 = "For a typical woman who has " + stim.past + " before, how frequently does she <strong>" + stim.present + "</strong>?"

      if (exp.womenFirst) {
          $(".question1a").html(womenQ)
          $(".question2a").html(womenQ2)
          $(".question1b").html(menQ)
          $(".question2b").html(menQ2)
      } else {
          $(".question1a").html(menQ)
          $(".question2a").html(menQ2)
          $(".question1b").html(womenQ)
          $(".question2b").html(womenQ2)
      }

    },

    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
        $(".slider_number").html(Math.round(exp.sliderPost*1000)/10+"%")
      }, "horizontal", 0.001, 600);
    },

    button : function() {
      responses = [$("#text_response_a").val(),
                   $("#text_response_b").val(),
                    $("#n_people_a").val(),
                     $("#n_people_b").val()]
      if (_.contains(responses, ""))  {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      var m = exp.womenFirst ? "b" : "a"
      var f = exp.womenFirst ? "a" : "b"
      var timeDictionary = {
        "week":7,
        "month":30,
        "year":365,
        "5 years":1825
      }
      exp.data_trials.push({
        "trial_type" : "twostep_elicitation",
        "trial_num": this.trialNum+1,
        "item": this.stim.habitual,
        "category": this.stim.category,
        "nPersons_women" :  $("#n_people_"+f).val(),
        "nPersons_men" : $("#n_people_"+m).val(),
        "comparisonNum_women": $("#comparison_"+f).val(),
        "comparisonNum_men" : $("#comparison_"+m).val(),
        "nInstances_women" : $("#text_response_"+f).val(),
        "nInstances_men" : $("#text_response_"+m).val(),
        "comparisonTime_women" : $("#frequency_"+f).val(),
        "comparisonTime_men" : $("#frequency_"+m).val(),
        "effectiveExistence_women" : $("#n_people_"+f).val() / $("#comparison_"+f).val(),
        "effectiveExistence_men" : $("#n_people_"+m).val() / $("#comparison_"+m).val(),
        "effectiveDayWait_women": timeDictionary[$("#frequency_"+f).val()] / $("#text_response_"+f).val(),
        "effectiveDayWait_men": timeDictionary[$("#frequency_"+m).val()] / $("#text_response_"+m).val(),
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
      var ut_id = "mht-hab-priors-20151221a";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];
  exp.stimuli = _.shuffle(stimuli);
  exp.n_trials = stimuli.length

  exp.womenFirst = _.sample([true, false])
  // debugger;
  exp.stimscopy = exp.stimuli.slice(0);

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
  exp.structure=[ "i0", "instructions","catch", "single_trial", 'subj_info', 'thanks'];
  
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