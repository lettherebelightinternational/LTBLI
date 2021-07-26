var config = {
    style: 'mapbox://styles/shineonltbli/ckr03hdr0189018om1i5rf0u5',
    accessToken: 'pk.eyJ1Ijoic2hpbmVvbmx0YmxpIiwiYSI6ImNrcG9jeWxzbzBoZGUyd28zOHF0anR2dnkifQ.bGjIsWuqlPn0HhCrLGcycg',
    showMarkers: false,
    markerColor: '#348DCE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Solar Lights are Changing Lives',
    subtitle: 'Let There Be Light International',
    byline: '',
    footer: 'Developed by Annie Lee, Duke University ‘22, and Alissa Benchimol, Greenhouse Gas Management Institute',
    chapters: [
      {
        id: 'Intro',
        alignment: 'full',
        hidden: false,
        title: 'Chapter 1: Our Story',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/our-impact.jpg',
        description: '',
        location: {
            center: [43.82, -7.17],
            zoom: 4.26,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'kmu',
            opacity: 0
          },
          {
            layer: 'gomba-points',
            opacity: 0
          },
          {
            layer: 'sbhh',
            opacity: 0
          },
          {
            layer: 'satellite',
            opacity: 0
          },
          {
            layer: 'lights',
            opacity: 0
          },
          {
            layer: 'uganda',
            opacity: 0
          },
          {
            layer: 'end',
            opacity: 0
          }
        ],
        onChapterExit: []
      },
        {
            id: 'History',
            alignment: 'right',
            hidden: false,
            title: 'History',
            image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/01/child-homework.jpg',
            description: '<b>600</b> million people in sub-Saharan Africa live without access to safe, reliable electricity. When the sun goes down, businesses close, streets grow dark, and homes are lit with dangerous, expensive and polluting kerosene and candles. Recognizing the power of solar to brighten lives, combat poverty and support sustainable development, we work with local partners to Let There Be Light International.',
            location: {
                center: [43.82, -7.17],
                zoom: 4.26,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Impact Info General',
            alignment: 'left',
            hidden: false,
            title: 'Energy Poverty in Uganda',
            image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/01/young-boy-with-solar-light.jpg',
            description: 'In 2014, Let There Be Light International began operations in Uganda, where 70% of the population and 25% of health clinics have no electricity. Working with local NGO partners, <b>54</b> rural Health Clinics received solar-electrification and 17,600 at-risk families have safe solar lights. 740,000 people have access to electrified clinics and 95,000 people have light at home.',
            location: {
                center: [30.854, 1.27],
                zoom: 6.59,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
          id: 'Impact Info Lives Impacted',
          alignment: 'left',
          hidden: false,
          title: 'Malawi and Kenya',
          image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/01/maria-and-family.jpg',
          description: 'In 2015, Let There Be Light International began programming in Malawi with 2 grassroots partners. In 2018, we launched operations in Kenya. 2,560 lights have been distributed in Malawi, lighting <b>13,824 lives.</b> 402 lights have been donated in Kenya, lighting <b>2,171 lives.</b> Indicators of program success include improved health, safety, economic stability, education, women’s empowerment, and wellbeing.',
          location: {
              center: [25.47783, -9.16605],
              zoom: 4.34,
              pitch: 45,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
              layer: 'kmu',
              opacity: 0.65
            },
            {
              layer: 'uganda',
              opacity: 0.65
            }
          ],
          onChapterExit: [
            {
              layer: 'kmu',
              opacity: 0
            },
            {
              layer: 'uganda',
              opacity: 0
            }
          ]
        },
        {
          id: 'SBHH',
          alignment: 'full',
          hidden: false,
          title: 'Chapter 2: Safe Births + Healthy Homes',
          image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/Mother-with-baby.jpg',
          description: '',
          location: {
              center: [34.056, 0.669],
              zoom: 6.95,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [],
          onChapterExit: [
            {
              layer: 'sbhh',
              opacity: 1
            }
          ]
        },
        {
          id: 'SBHH',
          alignment: 'right',
          hidden: false,
          title: 'General Program Info',
          image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/new-mothers.jpg',
          description: '<b>Safe Births + Healthy Homes</b> is an innovative maternal and infant health program developed in partnership with Solar Health Uganda. Core components are: 1. Solar Electrification of prioritized health centers to facilitate birth and delivery 2. Solar Outreach and training of communities on the benefits of renewable energy 3. donation of Solar Lights to new moms for the critical postpartum period.',
          location: {
              center: [34.056, 0.669],
              zoom: 6.95,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
        },
        {
          id: 'SBHH Impact Gen',
          alignment: 'right',
          hidden: false,
          title: 'Impact Info General',
          image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/Education.jpg',
          description: 'Safe Births + Healthy Homes operates at <b>5 clinics</b> in Uganda. In 2019, health officers leveraged LTBLI’s innovative solar programs to address high levels of maternal and infant mortality and morbidity in their districts. Recognizing that supporting maternal and infant health does not end after the critical birth event, LTBLI combined clinic electrification with safe lighting at home for infant care.',
          location: {
              center: [34.056, 0.669],
              zoom: 6.95,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
        },
        {
          id: 'SBHH Impact Lights',
          alignment: 'left',
          hidden: false,
          title: 'Impact Info Lights Distributed',
          image: '',
          description: '<iframe width="350" height="300" src="https://www.youtube.com/embed/1IwU_NJ8cfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <b>2,715 new mothers</b> have participated in Let There Be Light International’s Safe Births + Healthy Homes program at 5 rural Health Clinics in Uganda. Key impacts include increased attended birth rates, decreased reliance on dangerous and polluting kerosene and candles for light, improved finances, and increased anti-malarial bed-net usage. <b>14,500 people</b> are benefiting from improved lighting in their homes.',
          location: {
              center: [31.486357, 1.273585],
              zoom: 16.79,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
              layer: 'satellite',
              opacity: 1
            }
          ],
          onChapterExit: [
            {
              layer: 'sbhh',
              opacity: 0
            },
            {
              layer: 'satellite',
              opacity: 0
            }
          ]
        },
        {
          id: 'Lights4Literacy',
          alignment: 'full',
          hidden: false,
          title: 'Chapter 3: Lights 4 Literacy',
          image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/Reading-in-the-dark2-scaled.jpg',
          description: '',
          location: {
              center: [32.56725, 0.30878],
              zoom: 11.45,
              pitch: 45,
              bearing: -4.01
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
        },
        {
        id: 'Lights4LiteracyText',
        alignment: 'left',
        hidden: false,
        title: 'Program Information',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/Nalwadda-Latifah-and-Nassolo-Amina-second-photo-1-scaled.jpg',
        description: '<b>Lights 4 Literacy</b> is an education and energy-access partnership targeting school children in Uganda who receive a solar light and a book for use at home. Shining a light on education, LTBLI works in partnership with <a href="https://www.solarhealthuganda.org/" target="_blank" rel="noopener noreferrer">Solar Health Uganda</a> and Enjuba, (which runs the Ugandan Spelling Bee), to impact literacy rates as well as health and safety among school-aged children.',
        location: {
            center: [31.867, 0.495],
            zoom: 8.11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'lights',
            opacity: 1
          },
          {
            layer: 'settlement-minor-label',
            opacity: 1
          },
          {
            layer: 'settlement-major-label',
            opacity: 1
          }
        ],
        onChapterExit: [
          {
            layer: 'settlement-minor-label',
            opacity: 0
          },
          {
            layer: 'settlement-major-label',
            opacity: 0
          }
        ]
      },
      {
      id: 'Lights General',
      alignment: 'left',
      hidden: false,
      title: 'Impact Info General',
      image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2020/01/ERM_7848-scaled.jpg',
      description: 'Lights 4 Literacy targets rural off-grid communities in which school children lack access to safe lighting and books in their homes. Launched in 2020 in Uganda, Lights 4 Literacy demonstrates the power of partnerships to improve the health and safety of vulnerable children, impacting a range of Sustainable Development Goals including Good Health (SDG3), Education (SDG4), and Clean Energy (SDG7).',
      location: {
          center: [32.519, 0.3461],
          zoom: 10.61,
          pitch: 0,
          bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
    id: 'Lights Distributed',
    alignment: 'right',
    hidden: false,
    title: 'Impact Lights Distributed',
    image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/02/Reading-in-the-dark-scaled.jpg',
    description: 'Through multiple Lights 4 Literacy projects in central Uganda, <b>450 solar lights and children’s books</b> have been donated and distributed, impacting <b>2,430 children and their family members</b>. Parents and guardians of the children are trained by LTBLI on the dangers of kerosene and candles and how to use solar lights and also receive literacy training from our program partner.',
    location: {
        center: [32.573513, 0.445196],
        zoom: 15.96,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
      {
        layer: 'satellite',
        opacity: 1
      }
    ],
    onChapterExit: [
      {
        layer: 'lights',
        opacity: 0
      },
      {
        layer: 'satellite',
        opacity: 0
      }
    ]
  },
      {
        id: 'Transition',
        alignment: 'full',
        hidden: false,
        title: 'Chapter 4: Health Clinics',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/07/IMG_2803-2.jpg',
        description: '',
        location: {
          center: [31.398, 0.515],
          zoom: 8.14,
          pitch: 0,
          bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: 'Clinics',
        alignment: 'left',
        hidden: false,
        title: '54 Health Clinics Electrified',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2020/04/IMG_20190417_203320_5-scaled-1.jpg',
        description: 'Many rural health clinics in Africa remain off-grid and unelectrified. We’re looking to change that. Working with local Health Officers and Nurses, LTBLI is providing solar systems that power remote clinics, improving healthcare delivery and access for <b>hundreds of thousands of people</b>. Nurses, midwives and patients are able to access clinics 24/7 and facilities are safer for everyone.',
        location: {
          center: [31.398, 0.515],
          zoom: 8.14,
          pitch: 0,
          bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'gomba-points',
            opacity: 1
          }
        ],
        onChapterExit: []
      },
      {
        id: 'Kikonda',
        alignment: 'left',
        hidden: false,
        title: 'Kikonda Health Center',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/07/Screen-Shot-2021-07-14-at-1.00.20-AM.png',
        description: 'Kikonda Health Center III is a frontline clinic located in the Kyankwanzi District of central Uganda. It serves an area with <b>32,000 people</b>. Before solar-electrification, the clinic operated 12 hours/day but now is open 24/7. 350 patients visit the clinic weekly for treatment for respiratory tract infections, malaria and fever. 50 women give birth every month here.',
        location: {
          center: [31.485522, 1.273975],
          zoom: 16.31,
          pitch: 0,
          bearing: 0
        },
        mapAnimation: '',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'satellite',
            opacity: 1
          }
        ],
        onChapterExit: []
      },
      {
        id: 'Butemba',
        alignment: 'right',
        hidden: false,
        title: 'St. Mary’s Health Center - Sironko District',
        image: '',
        description: '<iframe width="350" height="300" src="https://www.youtube.com/embed/nvBsfUJJp7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> St. Mary’s Health Center III is located in a beautiful but remote region near Mt. Elgon and the Ugandan border with Kenya. <b>8,000</b> people live in the area served by the clinic. 140 people seek care every week with 30+ births a month. St. Mary’s received a large system capable of powering the clinic, staff quarters and administrative offices.',
        location: {
            center: [34.292014, 1.232707],
            zoom: 16.65,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [
          {
            layer: 'satellite',
            opacity: 0
          },
          {
            layer: 'gomba-points',
            opacity: 0
          }
        ]
      },
      {
        id: 'Join Us',
        alignment: 'full',
        hidden: false,
        title: 'Chapter 5: Africa at Night',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/07/Screen-Shot-2021-07-18-at-10.32.11-PM.png',
        description: '',
        location: {
            center: [31.605695, 1.142789],
            zoom: 16.23,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: 'Conclusion',
        alignment: 'left',
        hidden: false,
        title: 'Join Us',
        image: 'https://www.lettherebelightinternational.org/wp-content/uploads/2021/07/Screen-Shot-2021-07-16-at-1.39.58-AM.png',
        description: 'Too many people still lack electricity. With solar, we have the power to combat climate change and ensure that no one is left in the dark. Let There Be Light International is committed to working together to shine a light in the darkness. Solar lights are changing lives. Join us as we Shine On and <a href="https://www.lettherebelightinternational.org/" target="_blank" rel="noopener noreferrer">LTBLI</a>! <iframe width="330" height="300" src="https://www.youtube.com/embed/n5GxX2q17pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        location: {
            center: [-95.5, 13.5],
            zoom: 1.28,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'end',
            opacity: 1
          }
        ],
        onChapterExit: []
      }
    ]
};
