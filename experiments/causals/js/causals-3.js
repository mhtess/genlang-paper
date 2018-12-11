// so called elicitation task...
// same as experiment-11, 6 kinds / page

var replaceTerms = function(stim, label){
  var prompt = stim[label];
  return prompt.replace(/CATEGORY/g,
     stim.category).replace(/EXEMPLAR/g,
       stim.exemplar).replace(/TREATMENT/g,
         stim.treatment).replace(/TARGET/g,
           stim.target).replace(/QUERY/g,
             stim.query).replace(/UNIT/g,
               stim.unit).replace(/PAST/g,
                 stim.past).replace(/SPECIAL/g,
                 stim.targetTreatment)
};

var jsUcfirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
      $(".err").hide();
      $("#total-num").html(exp.nTrials);
     },
    button : function() {
        exp.go();
    }
  });

  slides.prior_elicitation = slide({
    name: "prior_elicitation",

   // present : _.shuffle(_.range(numTrials)),
    present : exp.stims,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      var prompt, utt;

      // show prior questions and responses
      $(".question0").hide();
      $("#slider_table0").hide();
      // $(".question1").show();
      $("#slider_table1").hide();
      $("#prior_number").hide();

      $(".data").show();

      // hide listener/speaker question
      $(".question2").hide();
      $(".task_prompt").hide();
      // hide listener task responses
      $("#listener_number").hide();
      $("#slider_table2").hide();
      // hide speaker task responses
      $("#speaker_choices").hide();
      $('input[name="speaker"]').prop('checked', false);

      $(".err").hide();
      $("#continueButton").hide()
      $("#evidenceDescription").hide();
      $("#nextExptButton").show()

      this.count = 0;
      // which half of trial we're in
      // this.switch = true;
      this.trialNum = exp.stimscopy.indexOf(stim);

      this.startTime = Date.now();

      // replace CATEGORY, EXEMPLAR, TREATMENT, PAST from stimuli
      var story = replaceTerms(stim, "storyline")

      // $(".data").html("You are on planet " + stim.planet +
      // ". " + story + " " +
      // replaceTerms(_.extend(stim, {preamble}), "preamble"));

      $(".data").html(story + " " +
      replaceTerms(_.extend(stim, {preamble}), "preamble"));


      this.missing = _.sample([1,2,3,4,5,6,7,8,9]);
      this.experimentNames = ["A","B","C","D","E","F","G","H","J","K","L"];

      stim.data.splice(this.missing, 0, "?");

      for (var i=0; i<=stim.data.length; i++){
        $("#d" + i).hide()
        $("#h" + i).hide()
        $("#d" + i + "a").hide()
      };
      $("#d-1").hide()
      $("#d-1a").hide()
      $("#d-1").css({"border":"1px solid black","font-size":"14px", "font-weight":"bold", "width":"20%"});
      $("#d-1").html(stim.unit + " " + stim.past);
      $("#d-1a").html(stim.unit + " treated")
      $("#d-1a").css({"border":"1px dotted black"});

      stim.targetTreatment = stim.treatment+ " " + this.experimentNames[this.missing]


      exp.sliderPost = -1;//[-1];//utils.fillArray(-1,this.n_sliders);
      this.stim = stim;
    },

    nextExperiment: function() {

      var isAnother = (this.count == 0) ? "" : "another "
      $("#d-1").show()
      $("#d-1a").show()
      i =this.count;
      $("#h" + i).show()
      $("#d" + i + "a").show()
      $("#d" + i).show()

      $("#h" + i).html(this.stim.treatment + " " + this.experimentNames[i])
      $("#h" + i).css({"font-size":"13px", "border":"1px dotted black"})
      $("#d" + i).css({"padding":"10px", "font-weight":"bold", "border":"1px solid black"});
      $("#d" + i).html(this.stim.data[i]);
      $("#d" + i + "a").html("100")
      $("#d" + i + "a").css({"border":"1px dotted black"});

      $("#evidenceDescription").show();
      if (this.stim.data[i] == "?") {
        $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>The results of experiment have been misplaced so <strong>we don't know</strong> how many " + this.stim.unit + this.stim.evidence +".");
      } else {
        $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>As a result, <strong>" + this.stim.data[i] + "</strong> " + this.stim.category +  this.stim.evidence +".");
      }



      // ADD SENTENCE DESCRIBING EACH EXPERIMENT RESULTS

      if (this.count == (this.experimentNames.length - 1)) {
        $("#evidenceDescription").hide();

        $("#continueButton").show()
        $("#nextExptButton").hide()

        if (exp.condition == "prior"){
          // this.init_sliders(0)
          utils.make_slider("#single_slider0", this.make_slider_callback(0))

          $(".question0").html("The experiment using "+ this.stim.targetTreatment + " is not finished yet.<br>When it finishes, how many of the attempted 100 "+this.stim.unit + " will be successfully " + this.stim.past + "?");
          $(".question0").show();

          $("#slider_table0").show();
          $("#prior_number").html("---");
          $("#prior_number").show();

        } else if (exp.condition == "speaker") {
          // this.init_sliders(1)
          utils.make_slider("#single_slider1", this.make_slider_callback(1))

          $(".question2").html(replaceTerms(this.stim, "prompt"));
          $(".task_prompt").show();
          $(".question2").show();

          prompt = replaceTerms(this.stim, "prompt");
          prompt +=  "<br>" + replaceTerms(this.stim, "frequencyStatement") + " <strong>" +
          this.stim.frequency + "</strong>"
          utt = 'Judge the following statement: <strong>"' + jsUcfirst(replaceTerms(this.stim, "utterance"))+ '"</strong>';
          // $("#slider_table1").show();
          $("#speaker_choices").show();
          $(".task_prompt").html(prompt);
          $(".question2").html(utt);

        } else if (exp.condition == "listener") {
          // debugger;
          // this.init_sliders(2)
          $(".question2").html(replaceTerms(this.stim, "prompt"));
          $(".task_prompt").show();
          $(".question2").show();

          utils.make_slider("#single_slider2", this.make_slider_callback(2))

          prompt = replaceTerms(this.stim, "prompt");
          utt = 'Your colleague tells you: <strong>"' + jsUcfirst(replaceTerms(this.stim, "utterance")) + '"</strong><br>' + replaceTerms(this.stim, "question");

          $("#listener_number").html("---");
          $("#listener_number").show();
          $("#slider_table2").show();
          $(".task_prompt").html(prompt);
          $(".question2").html(utt);

        }

      }
      this.count++
    },

    init_sliders : function(i) {
      utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost = ui.value;
        (i==0) ? $("#prior_number").html(Math.round(exp.sliderPost*100)+"") :
        (i==2) ? $("#listener_number").html(Math.round(exp.sliderPost*100)+"") : null
      };
    },

    button : function() {
      var speakerResponse = $('input[name="speaker"]:checked').val();
      var prompt, utt;
      console.log(speakerResponse)
      var error = 0;
      if (exp.condition == "speaker") {
        if (!speakerResponse) {
          error = 1;
        }
      } else {
        if (exp.sliderPost==-1) {
          error = 1;
        }
      }
      if (error == 1) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      if (exp.condition == "speaker") {
        var response = $('input[name="speaker"]:checked').val() == "Yes" ?  1 : 0;
      } else {
        var response = exp.sliderPost
      }
      exp.data_trials.push({
        "trial_type" : "prior_and_posterior",
        "condition": exp.condition,
        "trial_num": this.trialNum,
        "response" : response,
        "rt":this.rt,
        "frequency": this.stim.frequency,
        "category": this.stim.category,
        "story": this.stim.story,
        "distribution": this.stim.distribution,
        "treatment":this.stim.treatment,
        "unit":this.stim.unit,
        "target":this.stim.target,
        "planet": this.stim.planet,
        "query": this.stim.query,
        "missing":this.missing
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
      var ut_id = "mht-causals-20170421";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];

  // exp.condition = _.sample(["prior","speaker","speaker","speaker","speaker","listener"])
  exp.condition = "speaker"
  exp.nTrials = stories.length;

  exp.stims = [];
  var shuffledDists = _.shuffle(distributions);
  var frequencies = _.shuffle(tasks.speaker.frequencies);
  var labels = _.shuffle(creatureNames);
  var planets = _.shuffle(["X137","A325","Z142","Q681"])

  for (var i=0; i<stories.length; i++) {
    var f;
    if (exp.condition == "speaker"){
      f = {
        frequency: frequencies[i],
        category: labels[i].category,
        exemplar: labels[i].exemplar,
        prompt: tasks.speaker.prompt,
        utterance: tasks.speaker.utterance,
        question: tasks.speaker.question,
        frequencyStatement: tasks.speaker.frequencyStatement,
        planet: planets[i]
      };
      } else {
      f = {
        category: labels[i].category,
        exemplar: labels[i].exemplar,
        prompt: tasks.listener.prompt,
        utterance: tasks.listener.utterance,
        question: tasks.listener.question,
        planet: planets[i]
      }
    }
    exp.stims.push(
      _.extend(stories[i], shuffledDists[i], f)
    )
  };

  exp.stims = _.shuffle(exp.stims);
  exp.stimscopy = exp.stims.slice(0);

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
   exp.structure=[
     "i0",
    //  "instructions",
     "prior_elicitation",
     "subj_info",
     "thanks"
   ];

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
