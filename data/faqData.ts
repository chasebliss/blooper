export const faqData = [
  {
    question: '###### What do the dip switches do and should I be afraid?',
    answer: `
No, they are fun and helpful. the dip switches perform two jobs:

\` -\` __Customize blooper__
\` -\` __Configure expression, cv, or internal modulation__

That’s it! 
    
They add a lot of depth and flexibility to the Blooper – it won’t break. Get a snack, [pull up the manual](/resources/docs/manual.pdf), and it will all make sense within 30 minutes.`,
  },
  {
    question: `###### I’m having trouble connecting to the blip interface.`,
    answer: `
Some usb cables won’t make a good connection with blooper. Use the included usb cable if possible, make sure the pedal is powered, and the rest is a breeze.`,
  },
  {
    question: `###### How do I access the alternate modifiers?`,
    answer: `
The bank a and bank b dip switches give you access to two different sets of modifiers. You can also choose your own modifiers and arrangements using the [blip interface](https://chasebliss.com/wp-content/uploads/2021/12/blooper.3.1.1.html).`,
  },
  {
    question: `###### Why is my loop getting weird when I record modifiers in add mode?`,
    answer: `
You may notice the start/end points of your loop changing places, or other weird behaviour when you record certain modifiers. It can be helpful to physically think of blooper as a tape machine. When you first record a loop, you are setting the length of the tape.  
            
From this point on you are free to do all kinds of weird things to the audio on that tape – and even the machinery itself – but you can’t change the length of that tape. 

So let’s say you record a 3 second loop, then use a modifier to slow it down to half speed. The loop is now in fact 6 seconds. This will play no problem, but once you record this effect in add mode you essentially lose half of your loop. It just can’t fit. It can be disorienting, but it makes sense with practice. It also has its advantages. This [breakdown](/docs/recording-mod.pdf) should really help.`,
  },
  {
    question: `###### What can I do with MIDI, and how?`,
    answer: `We have a [page](/midi) for that!`,
  },
  {
    question: `###### Can I save control settings?`,
    answer: `
**Short answer:** No 

**Long answer:** Unlike other chase bliss pedals, we decided saving should focus on loop audio rather than control settings. 

This way, when you load up an old loop the controls won’t be invisibly locked in their saved position – what you see is what you get.`,
  },

  {
    question: `###### Can layers be isolated?`,
    answer: `
**Short answer:** No
 
**Long answer:** Because of blooper’s unique additive abilities, each layer contains all the audio from the previous layers. 

This makes it possible to completely transform your loop with stability and the modifiers, instead of those effects simply getting piled on top. you can go forward and backward through your layers, but you can’t isolate the audio on just one layer.
`,
  },
];
