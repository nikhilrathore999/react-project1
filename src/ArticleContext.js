import React, { createContext} from "react";

export const ArticleData = createContext();

export const ArticleProvider = (props) => {
  const ArtData = [
    
    {
      category: "tourism",
      data_obj: [{
          id: 1,
          image: "https://www.voyagebyme.com/wp-content/uploads/2018/02/kerala-4-S%C3%B6dra-Indien.jpg",
          heading: "Kerala : God's Own Country",
          caption:"Tourism/ January, 2021",
          data: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.",
        },
        { 
            id: 2,
            image: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            heading: "Manali: Heaven Resides",
            caption:"Tourism/ March 2020",
            data: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley." 
            },
        {
            id: 3, 
            image: "https://assets.sentinelassam.com/h-upload/2021/06/20/1600x960_235747-sikkim.jpg", 
            heading: "You are welcome, ALWAYS",
            caption:"Tourism/ March 2021",
            data: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. " 
        },
        {
            id: 4, 
            image: "https://www.responsibletravel.com/imagesClient/1540_909.jpg", 
            heading: "Sadda Punjab",
            caption:"Tourism/ February 2022",
            data: "Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site." 
        },
        { 
          id: 5,
          image: "https://www.karnatakatourism.org/wp-content/uploads/2020/06/P10-gallery.jpg",
          heading: "Karnataka: A place of Heritage",
          caption:"Tourism/ January 2021",
          data: "Karnataka is a state in southwest India with Arabian Sea coastlines. The capital, Bengaluru (formerly Bangalore), is a high-tech hub known for its shopping and nightlife. To the southwest, Mysore is home to lavish temples including Mysore Palace, former seat of the region’s maharajas." 
        }
      ]
    },
    
    {
      category: "fitness",
      data_obj: [{
        id: 6,
        image: "http://cdn.mos.cms.futurecdn.net/v44n2mBJgaRoCkkFGjDtRP.jpeg",
        heading: "Running",
        caption:"Fitness, January 2021",
        data: "Running helps to build strong bones, as it is a weight bearing exercise,strengthen muscles,improve cardiovascular fitness,burn plenty of kilojoules,help maintain a healthy weight.",
      },
      { 
          id: 7,
          image: "https://media.istockphoto.com/photos/closeup-of-weightlifter-clapping-hands-before-barbell-workout-a-picture-id601902710?k=20&m=601902710&s=612x612&w=0&h=Pg3BNIuBviyVaXmwfWYK73ip6KwuFQq-nVtjH0Dnk2Q=",
          heading: "Weight Lifting",
          caption:"Fitness,February 2020",
          data: "The best exercises depend on your goals and how much time you have. You can do one exercise per body part or you can do six. You can do exercises that focus on one muscle group or exercises that work several at the same time.The key is balance."
          },
      {
          id: 8, 
          image: "https://akm-img-a-in.tosshub.com/indiatoday/sunsetyoga-2_647_062115121022.jpg?Q7x3aPFYhLV6E2CgD7oXmSdjoh5wnAiq&size=1200:675", 
          heading: "Yoga",
          caption:"Fitness,March 2022",
          data: "Yoga is an ancient form of exercise that focuses on strength, flexibility and breathing to boost physical and mental wellbeing. The main components of yoga are postures (a series of movements designed to increase strength and flexibility) and breathing." 
      },
      {
          id: 9, 
          image: "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/piultz6nngltq541xmju", 
          heading: "Swimming",
          caption:"Fitness,January 2022s",
          data: "Swimming is the movement of the body through water using arms and legs. People can swim in the sea, swimming pools, rivers and lakes. People swim for exercise, for fun, and as a sport. There are several styles of swimming, known as strokes." 
      },
      { 
        id: 10,
        image: "https://www.muscleandfitness.com/wp-content/uploads/2018/08/1109-v-sit-press.jpg?w=300&quality=86&strip=all",
        heading: "Core Excercises",
        caption:"Fitness",
        data: "Core excercises are formidable way to strengthen the core. Here are some good one's to work with:  1-   Leg raises.        2 - Toe touches.      3 - Dynamic plank. 4 - Bird dog.      5 - Reverse crunch.  6 - Lower back extensions.   7 - Abdominal Crunches.   8 - Heel touches (from side-to-side)"       
      }]
    },
    
    {
    category: "technology",
    data_obj: [{
      id: 11,
      image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/12/06064959/700-X-394%402x-1.png",
      heading: "Meta-Verse",
      caption:"Technology,December 2021",
      data: "A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets",
    },
    { 
        id: 12,
        image: "https://miro.medium.com/max/1024/1*92OdlxNqI3iChI5kNl1MFg.jpeg",
        heading: "InternetOfThings",
        caption:"Technology,February 2020",
        data: "The Internet of things describes physical objects that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks." 
        },
    {
        id: 13, 
        image: "https://devtechnosys.com/insights/wp-content/uploads/2021/03/web-development-trends.png", 
        heading: "Web development",
        caption:"Technology, March 2021",
        data: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services" 
    },
    {
        id: 14, 
        image: "https://content.abt.com/media/about/buying_guide_images/home-automation-preview.jpg", 
        heading: "Home Automation",
        caption:"Technology, June 2021",
        data: "Home automation or domotics[1] is building automation for a home, called a smart home or smart house. A home automation system will monitor and/or control home attributes such as lighting, climate, entertainment systems, and appliances. It may also include home security such as access control and alarm systems." 
    },
    { 
      id: 15,
      image: "http://lowersforensics.com/wp-content/uploads/2019/07/LFI-Automation-AI.jpg",
      heading: "Artificial Intelligence",
      caption:"Technology, March 2022",
      data: "Facial Detection and Recognition using virtual filters on our faces when taking pictures and using face ID for unlocking our phones are two examples of artificial intelligence that are now part of our daily lives. The former incorporates face detection, meaning any human face is identified." 
    }
    ]
    },
    {
      category: "bollywood",
      data_obj: [{
        id: 16,
        image: "https://images.indianexpress.com/2021/07/WhatsApp-Image-2021-07-06-at-16.58.16.jpeg",
        heading: "Bhuj",
        caption:"Bollywood, January 2021",
        data: "IAF Squadron Leader Vijay Karnik strives to complete his mission and create history with the help of 300 women during the Indo-Pakistani War of 1971. It got a rating of 3.5/5 from IMDB and 66% rotten tomatoes",
      },
      { 
          id: 17,
          image: "https://i.ytimg.com/vi/3D9g4erlOVE/maxresdefault.jpg",
          heading: "BELL BOTTOM",
          caption:"Bollywood, August 2021 ",
          data: "When a flight is hijacked by terrorists, Anshul, an undercover agent, sets out to rescue the passengers held hostage. However, he must overcome several challenges to be successful in his quest.IMDB Rating 3/5" 
          },
      {
          id: 18, 
          image: "https://www.koimoi.com/wp-content/new-galleries/2021/12/ram-charan-gives-rrr-trailer-launch-a-miss-001.jpg", 
          heading: "RRR",
          caption:"Bollywood, March 2021 ",
          data: "A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s. IMDB rating : 5/5" 
      },
      {
          id: 19, 
          image: "https://i.ytimg.com/vi/xK2_6yX7aF8/maxresdefault.jpg", 
          heading: "Gangubai KathiaWadi",
          caption:"Bollywood, January 2022",
          data: "Young Ganga is tricked by her boyfriend with the promise of a film career and persuaded to leave the countryside for Mumbai. In Mumbai her dreams of a film career come crashing down and she is lured to the underworld." 
      },
      { 
        id: 20,
        image: "https://images.hindustantimes.com/img/2022/02/02/1600x900/amitabhbachchan_1643779661261_1643779695095.jpg",
        heading: "Jhund",
        caption:"Bollywood, March 2022",
        data: "Based on the life of Vijay Barse, a retired sports teacher who founded an NGO called Slum Soccer. Depicts how the hardships of a fallen master tries to climb back up with a new spirit" 
      }
    ]
    },
    {
      category: "food",
      data_obj: [{
        id: 21,
        image: "https://kfoods.com/images1/newrecipeicon/spicy-chicken-pizza_4963.jpg",
        heading: "Chicken-Pizza",
        caption:"Food, January",
        data: "It is a trustworthy choice on the long list of toppings. Chicken is delicious with even simple seasoning and proper cooking, and when you make it a pizza topping, it becomes more flavorful. New York Pizza can help you find the best symphony of flavors to satisfy all of your taste buds!",
      },
      { 
          id: 22,
          image: "https://www.themomoking.com/wp-content/uploads/2020/09/menu-5.jpg",
          heading: "Fried Momos",
          caption:"Food, May 2021",
          data: "Fried momos are easy and tasty snack that you can make at home in no time. It is a delicious take on traditional steamed momos. With crispy exterior and spicy vegetable filling, these momos tastes delicious with any dipping sauce." 
          },
      {
          id: 23, 
          image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/stbub9nf6zqclrpguesy", 
          heading: "Kolhapuri Thali",
          caption:"Food, March 2022",
          data: "The traditional thali includes the somber Sol kadhi, Kosimbir, Bhakri roti (a millet flatbread), rice, Bharli Vangi (stuffed brinjal), pitla (thick chickpea flour curry), Amti (spicy and tangy toor lentil), crispy Mutton fry, Pandhra Rassa (meat in white coconut based gravy with hints of poppy seeds) and Tambda Rassa" 
      },
      {
          id: 24, 
          image: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chocolate-Lover-s-Pancakes_EXPS_TOHCA19_133776_B03_15_3b_rms.jpg", 
          heading: "Chocolate Pancakes",
          caption:"Food,July 2020",
          data: "Pancakes are a hearty breakfast food, providing a high quantity of carbohydrates and a range of vitamins and minerals. However, pancakes can also be relatively high in fat, calories and sodium. With careful meal planning, you can include an occasional serving of pancakes in your diet." 
      },
      { 
        id: 25,
        image: "https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ea67b471327a1d82959b_chicken%20roll_1500%20x%201200.jpg",
        heading: "Chicken Rolls",
        caption:"Food, September 2021",
        data: "Chicken Roll is a delectable North Indian recipe made using all purpose flour, stir-fried chicken, yoghurt and a variety of vegetables rolled into paranthas. On days you do not want to prepare an elaborate meal, this delectable dish can be a saviour." 
      }
    ]
    },
  ];

  return (
    <ArticleData.Provider value={[ArtData]}>
      {props.children}
    </ArticleData.Provider>
  );
};