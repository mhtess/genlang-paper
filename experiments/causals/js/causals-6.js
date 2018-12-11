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
      console.log(stim)
      // show prior questions and responses
      $(".question0").hide();
      $("#slider_table0").hide();
      // $(".question1").show();
      $("#slider_table1").hide();
      $("#prior_number").hide();
      $("#multi_slider_table").hide();
      $(".left").hide()
      $(".right").hide()



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

      $("#nextExptButton").html("Look at results of next experiment");

      this.count = 0;
      this.waitFlag = 1;
      // which half of trial we're in
      // this.switch = true;
      this.trialNum = exp.stimscopy.indexOf(stim);

      this.startTime = Date.now();

      // replace CATEGORY, EXEMPLAR, TREATMENT, PAST from stimuli
      var story = replaceTerms(stim, "storyline")

      $(".data").html("You are an astronaut-scientist exploring a distant planet. "+
        // "You are on planet " + stim.planet +". " +
      story + " " +
      replaceTerms(_.extend(stim, {preamble}), "preamble"));
      //
      // $(".data").html(story + " " +
      // replaceTerms(_.extend(stim, {preamble}), "preamble"));

      // debugger;
      // this.missing = _.sample([1,2,3,4,5,6,7,8,9]);
      this.missing = _.sample(_.range(1, stim.data.length - 1));
      this.experimentNames = ["A","B","C","D","E","F","G","H","J","K","L"].slice(0, stim.data.length);

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
      // $("#d-1a").html(stim.unit + " treated")
      $("#d-1a").html(stim.unit + " " + stim.event)
      $("#d-1a").css({"border":"1px dotted black"});

      stim.targetTreatment = stim.treatment+ " " + this.experimentNames[this.missing]




      exp.sliderPost =[];//utils.fillArray(-1,this.n_sliders);
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

      var experimentEvent = this.stim.experiment;
      experimentEvent = experimentEvent.replace("SPECIAL", this.stim.treatment + " " +  this.experimentNames[i]).replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar);

      var experimentResults = this.stim.experimentResults;

      experimentResults = experimentResults.replace("N", this.stim.data[i]).replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar)

      if (this.stim.data[i] == "?") {

        // $("#evidenceDescription").html("Your team "+ experimentEvent + isAnother + " 100 " + this.stim.category + "<br>The results of this experiment have been misplaced so <strong>we don't know</strong> how many " + this.stim.category + " " + this.stim.evidence +".");

        $("#evidenceDescription").html(experimentEvent + "<br>" + this.stim.lostResults.replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar))

        //
        // $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>The results of this experiment have been misplaced so <strong>we don't know</strong> how many " + this.stim.category + " " + this.stim.evidence +".");


      } else {

        $("#evidenceDescription").html(experimentEvent + "<br>" + experimentResults)


          // "Your team "+ experimentEvent + isAnother +  " 100 " + this.stim.category +". <br>As a result, <strong>" + this.stim.data[i] + "</strong> " + this.stim.category +  this.stim.evidence +".");
        // $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>By the end of the experiment, <strong>" + this.stim.data[i] + "</strong> " + this.stim.category +  " "+this.stim.evidence +".");


      }

      if (this.count == (this.experimentNames.length - 1)) {

        if (this.waitFlag == 1) {

          $("#nextExptButton").html("Continue to the next page");
          this.waitFlag = 2;

        } else if (this.waitFlag == 2){
          $("#evidenceDescription").html("<strong>Please take another moment to review the results of the experiments.</strong>");
          this.waitFlag = 0;

        } else {
          $("#evidenceDescription").hide();
          $("#continueButton").show();
          $("#nextExptButton").hide();

          $(".data").hide();

          for (var i=0; i<=this.stim.data.length; i++){
            $("#d" + i).hide()
            $("#h" + i).hide()
            $("#d" + i + "a").hide()
          };
          $("#d-1").hide();
          $("#d-1a").hide();

          if (exp.condition == "prior"){
            // utils.make_slider("#single_slider0", this.make_slider_callback(0))
            // prior questions and sliders
            $(".question0").html("There were "+exp.nSliders+" other experiments conducted that day.<br>For each one, "+
            replaceTerms(this.stim, "otherExperiments") + "<br>" + replaceTerms(this.stim, "priorQuestion") )
            this.nextExperimentNames = ["M", "N", "P", "Q", "R", "S"].slice(0, exp.nSliders);


            $(".slider_row").remove();
            for (var i=0; i<this.nextExperimentNames.length; i++) {
              var sentence_type = this.nextExperimentNames[i];
              var sentence = this.stim.treatment + " " + this.nextExperimentNames[i];
              $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence' + i + '">' + sentence + '</td><td colspan="2"><div id="single_slider' + i + '" class="slider">-------[ ]--------</div></td></tr>');
              utils.match_row_height("#multi_slider_table", ".slider_target");
              this.init_sliders(i)
              // utils.make_slider("#single_slider" + i,  this.make_slider_callback(i))
            }



            $(".question0").show();
            $("#multi_slider_table").show();
            $(".left").show()
            $(".right").show()

            // $("#prior_number").html("---");
            // $("#prior_number").show();

          } else if (exp.condition == "speaker") {
            // this.init_sliders(1)


            utils.make_slider("#single_slider1", this.make_slider_callback(1))

            $(".question2").html(replaceTerms(this.stim, "prompt"));
            $(".task_prompt").show();
            $(".question2").show();

            prompt = replaceTerms(this.stim, "prompt");
            prompt +=  "<br>" + replaceTerms(this.stim, "experiment") + "<br>"+this.stim.experimentResults.replace("N", this.stim.frequency).replace("EXEMPLAR", this.stim.exemplar).replace("CATEGORY", this.stim.category)

            // By the end of the experiment, <strong>" + this.stim.frequency + "</strong> " + this.stim.category +  " "+this.stim.evidence +". <br>";
            utt = 'Judge the following statement: <strong>"' + jsUcfirst(replaceTerms(this.stim, "utterance")).replace("CATEGORY", this.stim.category)+ '"</strong>';

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
      } else {
        this.count++
      }
    },

    init_sliders : function(i) {
      utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },

    button : function() {
      var speakerResponse = $('input[name="speaker"]:checked').val();
      var prompt, utt;

      var error = 0;
      if (exp.condition == "speaker") {
        if (!speakerResponse) {
          error = 1;
        }
      } else {
        for (var i=0; i<exp.nSliders; i++) {
          if (typeof exp.sliderPost[i] == 'undefined') {
            error = 1;
          }
        }
        if (exp.sliderPost.length !== exp.nSliders) {
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
      var response = [];
      if (exp.condition == "speaker") {
        response = $('input[name="speaker"]:checked').val() == "Yes" ?  1 : 0;
        exp.data_trials.push({
          "trial_type" : "prior_and_posterior",
          "condition": exp.condition,
          "trial_num": this.trialNum,
          "rt":this.rt,
          "frequency": this.stim.frequency,
          "category": this.stim.category,
          "story": this.stim.story,
          "distribution": this.stim.distribution,
          "n_data":this.stim.n_data,
          "treatment":this.stim.treatment,
          "unit":this.stim.unit,
          "target":this.stim.target,
          "planet": this.stim.planet,
          "query": this.stim.query,
          "missing":this.missing,
          "response": response,
          "label": -99
        });
      } else {
        for (var i=0; i<exp.sliderPost.length; i++){
          exp.data_trials.push({
            "trial_type" : "prior_and_posterior",
            "condition": exp.condition,
            "trial_num": this.trialNum,
            "rt":this.rt,
            "frequency": -99,
            "category": this.stim.category,
            "story": this.stim.story,
            "distribution": this.stim.distribution,
            "n_data":this.stim.n_data,
            "treatment":this.stim.treatment,
            "unit":this.stim.unit,
            "target":this.stim.target,
            "planet": this.stim.planet,
            "query": this.stim.query,
            "missing":this.missing,
            "response": exp.sliderPost[i],
            "label": this.nextExperimentNames[i]
          });
        }
      }
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
      var ut_id = "mht-causals-20170504";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];


  // exp.condition = _.sample(["prior","speaker","speaker","speaker","speaker","listener"])
  // exp.condition = _.sample(["prior","speaker"])
  exp.condition = "prior"
  exp.nTrials = 1;
  exp.nSliders = exp.condition == "prior" ? 6 : 1;
  exp.stims = [];

  exp.n_data = _.shuffle([4,4,4,4])

  var dist = _.shuffle(distributions);

  var frequencies = _.shuffle(tasks.speaker.frequencies);
  var labels = _.shuffle(creatureNames);
  var planets = _.shuffle(["X137","A325","Z142","Q681"])
  stories = _.shuffle(stories).slice(0,1);


  for (var i=0; i<stories.length; i++) {
    var f;
    var distSliced = {
      distribution: dist[i].distribution,
      data: dist[i].data.slice(0, exp.n_data[i]),
      n_data: exp.n_data[i]
    }
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
      _.extend(stories[i], distSliced, f)
    )
  };

// console.log(exp.stims)

  // var f;
  //   if (exp.condition == "speaker"){
  //     f = {
  //       frequency: frequency,
  //       category: label.category,
  //       exemplar: label.exemplar,
  //       prompt: tasks.speaker.prompt,
  //       utterance: tasks.speaker.utterance,
  //       question: tasks.speaker.question,
  //       frequencyStatement: tasks.speaker.frequencyStatement,
  //       planet: planet
  //     };
  //   } else {
  //     f = {
  //       category: label.category,
  //       exemplar: label.exemplar,
  //       prompt: tasks.listener.prompt,
  //       utterance: tasks.listener.utterance,
  //       question: tasks.listener.question,
  //       planet: planet
  //     }
  //   }
  // exp.stims.push(
  //   _.extend(story, distSliced, f)
  // )





  // exp.stims = _.shuffle(exp.stims).slice(0, exp.nTrials);
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
