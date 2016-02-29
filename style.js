var reactions = ['fail','wtf','cute','heart','heartbreak','omg','lol','win','yaaass','ew'];

// Get the html element in which we will put content, in this case it has an id. Check out the html on the left.

// Loop through the reactions, create a <p> for each reactions
// Put the newly created <p> within the existing element we just defined

reactions.forEach(function(oneReactions){
  //console.log('Buzzfeed has a lot of weird tags. One of them is ' + oneReactions);
  var temp = ('<p> Buzzfeed has a lot of weird tags. One of them is ' + oneReactions + '.' + '</p>');
  console.log(temp);
  $('#reactions').append(temp);
});

