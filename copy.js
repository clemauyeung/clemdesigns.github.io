var = phrases [
  "Hiya, I'm a content strategist, UX writer, and designer working at the intersection of editorial and product experience. I collaborate with teams to design the content that goes into websites, mobile apps, software, and conversational interfaces."
  "I use the human-centered design process to help startups, nonprofits, and enterprise companies tackle gnarly content and product challenges. That usually means building empathy with the audience first with data, then iterating on ideas that make a real difference in people's lives."
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
