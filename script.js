$(".Anx").hide();
$(".pol").hide();

$(".container").click(function(){
  $(".main").hide();
  $(".info").hide();
  $(".container").hide();
  $("h1").hide();
  $("h2").hide();
  $(".header").show();
  $(".title").show();
  $(".desc").text("A mental disorder is a clinically significant impairment in cognitive, emotional, and behavioral functioning. Behavioral manifestations indicate a breakdown in the psychological, biological, or developmental processes that underpin Mental Illness. Distress in social, occupational, or other crucial tasks is often a symptom of mental disorder. Given that stress or loss is an expected and culturally accepted response to a stressful or traumatizing event, such as the death of a close family member, anxiety or loss is not considered a mental disorder. Unless there is a deviation, neither socially deviant behavior nor conflicts primarily between an individual and society are considered mental diseases. As previously stated, conflict is caused by an individual’s dysfunction.");
    $(".Anx").show();
    $(".anxiety").text("An anxiety disorder is a type of mental health condition. If you have an anxiety disorder, you may respond to certain things and situations with fear and dread. You may also experience physical signs of anxiety, such as a pounding heart and sweating. It’s normal to have some anxiety. You may feel anxious or nervous if you have to tackle a problem at work, go to an interview, take a test or make an important decision. And anxiety can even be beneficial. For example, anxiety helps us notice dangerous situations and focuses our attention, so we stay safe.But an anxiety disorder goes beyond the regular nervousness and slight fear you may feel from time to time.");
    $(".anxiety").show();
    $(".pol").show();
    $(".bipolar").text("Bipolar disorder is different from depression, but it is included in this list is because someone with bipolar disorder experiences episodes of extremely low moods that meet the criteria for major depression (called “bipolar depression”). But a person with bipolar disorder also experiences extreme high – euphoric or irritable – moods called “mania” or a less severe form called “hypomania.”");
    $(".bipolar").show();
    $(".desc").show();
    $(".GFG").hide();
  });

$(".btn-bgstroke").click(function(){
    $(".main").show();
  $(".info").show();
  $(".container").show();
  $("h1").show();
  $("h2").show();
  $(".header").show();
  $(".title").show();
  $(".desc").hide();
    $(".pol").hide();
    $(".bipolar").hide();
    $(".Anx").hide();
    $(".anxiety").hide();
    $(".GFG").show();
});