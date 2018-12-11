function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
     $("#ntrials").html(exp.n_trials)
   },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.free_production = slide({
    name: "free_production",
    present : exp.stimuli,
    present_handle : function(property) {
      $(".err").hide();
      $("#text_response").val('')
      this.startTime = Date.now();
      this.property = property;
      $(".prompt").html(
        "Imagine you come across a thing (animal or insect) that <strong>" +  property +
        "</strong>.<br> What do you think it is?"
      );
    },
    button : function() {
      response = $("#text_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },
    log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "free_production",
        "trial_num": exp.fixedStims.indexOf(this.property) + 1,
        "category": this.property,
        "response": $("#text_response").val(),
        "rt": this.rt
      });
    }
  });

  // slides.one_slider = slide({
  //   name : "one_slider",
  //   present : exp.stimuli,
  //   present_handle : function(stim) {
  //     $(".err").hide();
  //     this.startTime = Date.now();
  //     this.stim = stim;
  //
  //     $(".prompt").html(
  //       "Imagine you come across a thing that <strong>" + stim.property +
  //       "</strong>.<br> What are the odds that it is a <strong>" + stim.category + "</strong>?"
  //     );
  //     this.init_sliders();
  //     exp.sliderPost = null; //erase current slider value
  //   },
  //
  //   button : function() {
  //     if (exp.sliderPost == null) {
  //       $(".err").show();
  //     } else {
  //       this.rt = Date.now() - this.startTime;
  //       this.log_responses();
  //       _stream.apply(this);
  //     }
  //   },
  //
  //   init_sliders : function() {
  //     utils.make_slider("#single_slider", function(event, ui) {
  //       exp.sliderPost = ui.value;
  //     });
  //   },
  //
  //   log_responses : function() {
  //     exp.data_trials.push({
  //       "trial_type" : "cue_validity",
  //       "trial_num": exp.fixedStims.indexOf(this.stim) + 1,
  //       "category": this.stim.category,
  //       "property": this.stim.property,
  //       "response": exp.sliderPost,
  //       "rt": this.rt
  //     });
  //   }
  // });

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
        comments : $("#comments").val(),
        fairprice: $("#fairprice").val(),
        problems: $("#problems").val()
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
      var ut_id = "mht-cue-20170321";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();


  exp.trials = [];
  exp.catch_trials = [];

  // var props = _.shuffle(originalProperties);
  // var cats = _.shuffle(originalCategories);
  // var i = 0;
  // // 10 randomly paired items
  // while (exp.stimuli.length < 10){
  //   var j = {property: props[i], category: cats[i]};
  //   if (originalTargets.indexOf(j) == -1) {
  //     exp.stimuli.push(j)
  //   }
  //   i++;
  //   if (i == (cats.length - 1)) {
  //     i=0; cats = _.shuffle(originalCategories);
  //     props = _.shuffle(originalProperties);
  //   }
  // }
  // 30 target items

  exp.stimuli = _.shuffle(_.uniq(_.pluck(originalTargets, "property")))

  exp.n_trials = exp.stimuli.length;
  exp.fixedStims = exp.stimuli.slice(0);

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
    "instructions",
    "free_production",
    'subj_info',
    'thanks'
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
