var = phrases [
  "Previously, I was a UX researcher at Capital One. I worked on AI research.",
  "I also designed a voice user interface for Capital One as a content designer.",
  "I received my M.S. in Human Centered Design & Engineering from the University of Washington.",
  "I'm grateful I had the chance to create an online course on community strategy with the wonderful friends at CMX Media.", 
  "I also worked on building a community of listeners for a podcast on creativity.",
  "I was an editor at one point.",
  "I got my start at a tech startup helping organizations launch crowdfunding campaigns for social impact projects.",
]

$("input").on("input", function() {
  
  var value = $(this).val()
  
  var phrase = phrases[value]

  $("div.phrase").html(phrase)
  
  })
