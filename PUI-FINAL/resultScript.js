// URL 파라미터 변경
let validation = '';
let mbti = document.querySelector('.mbti');
let character = document.querySelector('.result-name');
let chaDesc = document.querySelector('#chaDesc');
let adviceContent = document.querySelector('#adviceContent');
let hateContent = document.querySelector('#hateContent');
let chosenMBTI = '';


for(let i=0; i<localStorage.length;i++){
    validation = localStorage.key(i);
}

//여기가 잘못됐다
if(validation=='mbti'){
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    chosenMBTI = urlParams.get('mbti');
    console.log(chosenMBTI)

    chosenMBTI = localStorage.getItem('mbti');
    urlParams.set('mbti',chosenMBTI);
    let newParams = urlParams.toString();
    window.location.replace("./result.html?mbti="+chosenMBTI);
    // window.open(location.pathname+'?'+newParams,'_self');
} else{
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    chosenMBTI = urlParams.get('mbti');
    console.log(chosenMBTI)
}

// console.log(chosenMBTI);


mbti.innerText = '#' + chosenMBTI;

if(chosenMBTI == 'ISTJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Logistician Cabbage';
    chaDesc.innerText = 'Practical and fact-minded individuals, whose reliability cannot be doubted';
    $('#descList-1').text("You are introverted, observant, thinking, and judging.");
    $('#descList-2').text("You tend to be reserved yet willful, with a rational outlook on life.");
    $('#descList-3').text("You compose their actions carefully and carry them out with methodical purpose.");

    $('#strContent-1').text("#Honest and Direct");
    $('#strContent-2').text("#Strong-willed and Dutiful");
    $('#strContent-3').text("#Very Responsible");
    $('#strContent-4').text("#Calm and Practical");
    $('#strContent-5').text("#Create and Enforce Order");
    $('#strContent-6').text("#Jacks-of-all-trades");

    $('#advContent-1').text("Try to accept that you can be wrong about something, and try new things.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ISFJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Defender Potato';
    chaDesc.innerText = 'Very dedicated and warm protectors, always ready to defend your loved ones';
    $('#descList-1').text("You are introverted, observant, feeling, and judging.");
    $('#descList-2').text("You tend to be be warm and unassuming in your own steady way.");
    $('#descList-3').text("You are efficient and responsible, giving careful attention to practical details in your daily lives.");

    $('#strContent-1').text("#Supportive");
    $('#strContent-2').text("#Reliable");
    $('#strContent-3').text("#Observant");
    $('#strContent-4').text("#Enthusiastic");
    $('#strContent-5').text("#Hardworking");
    $('#strContent-6').text("#Good Practical Skills");

    $('#advContent-1').text("Try to express negative feelings not to make you repressed and outburst of frustration.");

    $('#wrpContent-1').text("This person can always be relied on for their kindness and ability to listen carefully to concerns and to find ways to resolve them.");
}

if(chosenMBTI == 'INFJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Advocate Carrot';
    chaDesc.innerText = 'Quiet and mystical, yet very inspiring and tireless idealists';
    $('#descList-1').text("You are introverted, intuitive, feeling, and judging.");
    $('#descList-2').text("You tend to approach life with deep thoughtfulness and imagination.");
    $('#descList-3').text("Your inner vision, personal values, and a quiet, principled version of humanism guide you in all things.");

    $('#strContent-1').text("#Creative");
    $('#strContent-2').text("#Insightful");
    $('#strContent-3').text("#Principled");
    $('#strContent-4').text("#Passionate");
    $('#strContent-5').text("#Altruistic");
    $('#strContent-6').remove(); 

    $('#advContent-1').text("Try to be more flexible to prevent yourself from perfectionism.");

    $('#wrpContent-1').text("This person's strengths is its ability to identify others' motives and understand the root causes of conflict.");
}

if(chosenMBTI == 'INTJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Architect Radish';
    chaDesc.innerText = 'Imaginative and strategic thinkers, with a plan for everything';
    $('#descList-1').text("You are introverted, intuitive, thinking, and judging.");
    $('#descList-2').text("You love perfecting the details of life, applying creativity and rationality to everything they do.");
    $('#descList-3').text("Your inner world is often a private, complex one.");

    $('#strContent-1').text("#Rational");
    $('#strContent-2').text("#Informed");
    $('#strContent-3').text("#Independent");
    $('#strContent-4').text("#Determined");
    $('#strContent-5').text("#Curious");
    $('#strContent-6').text("#Original");

    $('#advContent-1').text("Try to admit others who seems to value feelings more than facts and accept useful input from other people.");

    $('#wrpContent-1').text("This person is not really like teamwork or social interaction, but generally speaking, this person can be a great leader who respect proactive behavior.");
}

if(chosenMBTI == 'ISTP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Virtuoso Tomato';
    chaDesc.innerText = 'Bold and practical experimenters, masters of all kinds of tools';
    $('#descList-1').text("You are introverted, observant, thinking, and prospecting.");
    $('#descList-2').text("You tend to have an individualistic mindset, pursuing goals without needing much external connection.");
    $('#descList-3').text("You engage in life with inquisitiveness and personal skill, varying their approach as needed.");

    $('#strContent-1').text("#Optimistic and Energetic");
    $('#strContent-2').text("#Creative and Practical");
    $('#strContent-3').text("#Spontaneous and Rational");
    $('#strContent-4').text("#Know How to Prioritize");
    $('#strContent-5').text("#Great in a Crisis");
    $('#strContent-6').text("#Relaxed");

    $('#advContent-1').text("Try to accept criticism and stick to long-term commitments.");

    $('#wrpContent-1').text("This person has a great sense of humor, and is not only resistant to workplace conflicts, but is great at defusing them with a well-placed joke that puts it all into perspective.");
}
//여기서부터는 zepeto 조언 페이지를 반영하고, 커리어에 대해서는 안씀!
if(chosenMBTI == 'ISFP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Adventurer Broccoli';
    chaDesc.innerText = 'Flexible and charming artists, always ready to explore and experience something new';
    $('#descList-1').text("You are introverted, observant, feeling, and prospecting.");
    $('#descList-2').text("You tend to have open minds, approaching life, new experiences, and people with grounded warmth.");
    $('#descList-3').text("Your ability to stay in the moment helps you uncover exciting potentials.");

    $('#strContent-1').text("#Charming");
    $('#strContent-2').text("#Sensitive to Others");
    $('#strContent-3').text("#Imaginative");
    $('#strContent-4').text("#Passionate");
    $('#strContent-5').text("#Curious");
    $('#strContent-6').text("#Artistic");

    $('#advContent-1').text(" Do you struggle with prioritizing yourself and accomplishing your goals?Let's develop the skills to better communicate your needs and priorities!Try to focus on opening your perspective to include a more accurate picture of what is really going on in the world.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'INFP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Mediator Eggplant';
    chaDesc.innerText = 'Poetic, kind and altruistic people, always eager to help a good cause';
    $('#descList-1').text("You are introverted, intuitive, feeling, and prospecting.");
    $('#descList-2').text("You tend to be quiet, open-minded, and imaginative.");
    $('#descList-3').text("You apply a caring and creative approach to everything you do.");

    $('#strContent-1').text("#Empathetic");
    $('#strContent-2').text("#Generous");
    $('#strContent-3').text("#Open-minded");
    $('#strContent-4').text("#Creative");
    $('#strContent-5').text("#Passionate");
    $('#strContent-6').text("#Idealistic");

    $('#advContent-1').text("But isn't it hard being a perfectionist? Practice letting go a little! Don't try to please everyone! You're doing well enough and don't have to perfect.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'INTP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Logician Mushroom';
    chaDesc.innerText = 'Innovative inventors with an unquenchable thirst for knowledge';
    $('#descList-1').text("You are introverted, intuitive, thinking, and prospecting.");
    $('#descList-2').text("You enjoy taking an unconventional approach to many aspects of life.");
    $('#descList-3').text("You often seek out unlikely paths, mixing willingness to experiment with personal creativity.");

    $('#strContent-1').text("#Analytical");
    $('#strContent-2').text("#Original");
    $('#strContent-3').text("#Open-minded");
    $('#strContent-4').text("#Curious");
    $('#strContent-5').text("#Objective");
    $('#strContent-6').remove();

    $('#advContent-1').text("Don't be too proud! If you look at yourself with a more humble mindset, it will help you grow.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ESTP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Entrepreneur Paprika';
    chaDesc.innerText = 'Smart, energetic and very perceptive people, who truly enjoy living on the edge';
    $('#descList-1').text("You are extraverted, observant, thinking, and prospecting.");
    $('#descList-2').text("You tend to be energetic and action-oriented, deftly navigating whatever is in front of you.");
    $('#descList-3').text("You love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.");

    $('#strContent-1').text("#Bold");
    $('#strContent-2').text("#Rational and Practical");
    $('#strContent-3').text("#Original");
    $('#strContent-4').text("#Perceptive");
    $('#strContent-5').text("#Direct");
    $('#strContent-6').text("#Sociable");

    $('#advContent-1').text("You have a tendency to trust your own problem-solving skills a little too much. This might lead to work build-up and procrastination that can affect your coworkers, so try to plan and prepare more");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ESFP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Entertainer Cucumber';
    chaDesc.innerText = 'Spontaneous, energetic and enthusiastic people – life is never boring around them';
    $('#descList-1').text("You are extroverted, observant, feeling, and prospecting.");
    $('#descList-2').text("You love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown.");
    $('#descList-3').text("You can be very social, often encouraging others into shared activities.");

    $('#strContent-1').text("#Bold");
    $('#strContent-2').text("#Original");
    $('#strContent-3').text("#Very Responsible");
    $('#strContent-4').text("#Aesthetics and showmanship");
    $('#strContent-5').text("#Practical");
    $('#strContent-6').text("#Observant");

    $('#advContent-1').text("Don't you run into problems with procrastination? You need to find a good balance between work and social life.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ENFP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Campaigner Bean';
    chaDesc.innerText = 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile';
    $('#descList-1').text("You are extroverted, intuitive, feeling, and prospecting.");
    $('#descList-2').text("You tend to embrace big ideas and actions that reflect your sense of hope and goodwill toward others.");
    $('#descList-3').text("Your vibrant energy can flow in many directions.");

    $('#strContent-1').text("#Curious");
    $('#strContent-2').text("#Perceptive");
    $('#strContent-3').text("#Enthusiastic");
    $('#strContent-4').text("#Excellent communicators");
    $('#strContent-5').text("#Festive");
    $('#strContent-6').text("#Good-natured");

    $('#advContent-1').text("You may miss out on the details, so let's try to be more meticulous.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ENTP'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Debater Pepper';
    chaDesc.innerText = 'Smart and curious thinkers who cannot resist an intellectual challenge';
    $('#descList-1').text("You are extroverted, intuitive, thinking, and prospecting.");
    $('#descList-2').text("You tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility.");
    $('#descList-3').text("You pursue your goals vigorously despite any resistance you might encounter.");

    $('#strContent-1').text("#Knowledgeable");
    $('#strContent-2').text("#Quick Thinkers");
    $('#strContent-3').text("#Original");
    $('#strContent-4').text("#Excellent brainstormers");
    $('#strContent-5').text("#Charismatic");
    $('#strContent-6').text("#Energetic");

    $('#advContent-1').text("Due to your nature, you may make promises beyond your abilities. Be careful not to lose peoples' trust in this way.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ESTJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Executive Onion';
    chaDesc.innerText = 'Excellent administrators, unsurpassed at managing things – or people';
    $('#descList-1').text("You are extroverted, observant, thinking, and judging.");
    $('#descList-2').text("You possess great fortitude, emphatically following your own sensible judgment.");
    $('#descList-3').text("You often serve as a stabilizing force among others, able to offer solid direction amid adversity.");

    $('#strContent-1').text("#Dedicated");
    $('#strContent-2').text("#Strong-willed");
    $('#strContent-3').text("#Direct and honest");
    $('#strContent-4').text("#Loyalm patient and reliable");
    $('#strContent-5').text("#Enjoy creating order");
    $('#strContent-6').text("#Excellent organizers");

    $('#advContent-1').text("Being more flexible will be good for you.");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ESFJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Consul Avocado';
    chaDesc.innerText = 'Extraordinarily caring, social and popular people, always eager to help';
    $('#descList-1').text("You are extroverted, observant, feeling, and judging.");
    $('#descList-2').text("You are attentive and people-focused, and you enjoy taking part in their social community.");
    $('#descList-3').text("Your achievements are guided by decisive values, and you willingly offer guidance to others.");

    $('#strContent-1').text("#Strong practical skills");
    $('#strContent-2').text("#Strong sense of duty");
    $('#strContent-3').text("#Very loyal");
    $('#strContent-4').text("#Sensitive and warm");
    $('#strContent-5').text("#Good at connecting with others");
    $('#strContent-6').remove();

    $('#advContent-1').text("Do you have trouble prioritizing yourself over others? Sometimes you need to say NO!");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ENFJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Protagonist Pumpkin';
    chaDesc.innerText = 'Charismatic and inspiring leaders, able to mesmerize their listeners';
    $('#descList-1').text("You are extroverted, intuitive, feeling, and judging.");
    $('#descList-2').text("You love helping others, and you tend to have strong ideas and values.");
    $('#descList-3').text("You back your perspective with the creative energy to achieve your goals.");

    $('#strContent-1').text("#Receptive");
    $('#strContent-2').text("#Reliable");
    $('#strContent-3').text("#Passionate");
    $('#strContent-4').text("#Altruistic");
    $('#strContent-5').text("#Charismatic");
    $('#strContent-6').remove();

    $('#advContent-1').text("Because you have a lot of interest in people, you may miss opportunities to immerse yourself in your work. Why don't we try to focus a bit more on work over people?");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

if(chosenMBTI == 'ENTJ'){
    $('#chaImg').attr("src","./character/"+chosenMBTI+".png")
    character.innerText = 'Commander Garlic';
    chaDesc.innerText = 'Bold, imaginative and strong-willed leaders, always finding a way – or making one';
    $('#descList-1').text("You are extroverted, intuitive, thinking, and judging.");
    $('#descList-2').text("You are decisive people who love momentum and accomplishment.");
    $('#descList-3').text("You gather information to construct your creative visions but rarely hesitate for long before acting on you.");

    $('#strContent-1').text("#Efficient");
    $('#strContent-2').text("#Energetic");
    $('#strContent-3').text("#Self-confident");
    $('#strContent-4').text("#Strong-willed");
    $('#strContent-5').text("#Strategic thinkers");
    $('#strContent-6').text("#Charismatic and inspiring");

    $('#advContent-1').text("You need to respect the feelings and contributions of your co-workers a little more. Why don't you adopt a softer approach and listen to other opinions more?");

    $('#wrpContent-1').text("Among colleagues,no one can be trusted more to ensure that projects are finished on time and by the book than this person.");
}

//animation

//퍼펙리스트 리스트 변경

$(document).ready(function(){
    $('#redo-btn').click(function(){
        alert("I'm working on the test page!")
        window.location.replace("https://jiwonl3.github.io/PUI-FINAL/PUI-FINAL/index.html");
    });

    $('#copy-btn').click(function(){
        $('#snackbar').attr('id','snack-bar')
        setTimeout(function(){
            $('#snack-bar').attr('id','snackbar')},3000);
        var $temp = $("<input>");
        var $url = $(location).attr('href');
            
        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
    })
});

