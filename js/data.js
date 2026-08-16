const pageMeta = {
    description: "Cassandra Downs is an Anglo-Australian and Stolen Generations affected woman living on Wurundjeri Country. She is a self-taught ceramic artist whose zoomorphic vessels explore the effects of colonisation on both the environment and identity of so-called Australia.",
    keywords: "cassandra, cass, downs, sculpture, ceramic, pottery, zoomorphic, vessels, australian, native, clay, london"
};


/* ─── Works data ─────────────────────────────────────────── */

const works = [
    {
        slug: 'not-dead-only-sleeping',
        title: 'Not Dead, Only Sleeping',
        year: '2021',
        medium: 'Wild clay, sand, red ochre; acacia sap glaze; pit-fired',
        description: [
            'This Wimburr (Wallaby) vessel was made on Wurundjeri Woi Wurrung Country during Melbourne\'s sixth and final COVID lockdown, the end of which resulted in more cumulative time under stay-at-home orders than any other city in the world - six lockdowns over eighteen months.',
            'After months of being confined to house and yard, pacing, looking forward to her permitted hour of exercise each day, she was forced to recognise the shape of her own life: that this was how a domestic dog lived. She felt like she was sleeping through her own life rather than living it. When the end of the fifth lockdown was announced, the city finally felt real hope - plans were made to see friends and loved ones, to travel, to ride bikes in the sun - and a future felt close again. But nine days later, when the sixth lockdown was announced, this hope catastrophically collapsed. Not Dead, Only Sleeping was a piece born of that collapse. The artist replaced feelings of isolation and sadness with anger, and a fierce hunger to actually live - and confined once again to her home studio, expressed those feelings through sculpture.',
            'Every material used was foraged within walking distance of the Maribyrnong River, an extremely important body of water to the Wurundjeri people, taking its name from the phrase Mirring-gnay-bir-nong - "I can hear a ringtail possum". It was a river relied upon for transport, materials, food, medicine, and water, long before it provided the materials for this vessel: acacia sap gathered from local trees; sand and red ochre sourced from an old quarry along the river; and raw clay from the artist\'s backyard, where the piece was later pit-fired using wood collected from roadside fellings.',
            '<p class="caption">Original sculpture in a private collection, Melbourne.</p>',
            '<p class="caption">Exhibited: Koorie Art Show, Koorie Heritage Trust, Melbourne, 2021</p>',
            '<p class="caption">Part of the \'Pre-Fire\' print series</p>'
        ],
        link: {
            text: 'View print availability',
            href: '/prints/ndos.html'
        },
        images: [
            '/img/works/ndos-face.png',
            '/img/works/ndos-front.png',
            '/img/works/ndos-spout.png',
            '/img/works/ndos-leg.png',
            '/img/works/ndos-neck.png',
            '/img/works/ndos-top.png',
            '/img/works/ndos-front-side.png',
            '/img/works/ndos-back.png'
        ],
        url: '/works/not-dead-only-sleeping.html'
    },
    {
        slug: 'homecoming',
        title: 'Homecoming',
        year: '2023',
        medium: 'Wild clay, sand, manna gum, paperbark; acacia sap glaze; pit-fired',
        description: [
            '<i>Body</i>: Clay from Darebin, sand from the Maribyrnong, sap of Garrong (Black Wattle / Acacia mearnsii). <i>Plug</i>: Wurun branch (Manna Gum / Eucalyptus viminalis) coated in Baggup sap (Grass Tree / Xanthorroea australis) with a small strip of Paperbark (Melaleuca quinquenervia).',
            'For over 100 years my family has been disconnected from Country, Community, and Culture. The impact of colonisation on our identity was so deeply ingrained that I always felt too afraid to reach out - that I was a fraud for not being able to answer "who\'s your mob, where are you from?"',
            'This Gurrborra (Koala) is a reflection of our journey. It matured under intense stress, leaving it scarred from what it went through - but most importantly, unbroken. Once removed from the fire, it was lovingly repaired and coated in the sap of Garrong, the grandparent plant, to protect it for what\'s to come.',
            'Like the Gurrborra, our family is slow to reach our destination, but every day I feel our ancestors pushing me to regain what was kept from us. It doesn\'t matter how long we were lost, as long as we eventually come home.',
            'All components were foraged and crafted on Wurundjeri Country, and fired on Boon Wurrung Country - with gratitude.',
            '<p class="caption">Original sculpture in a private collection, Melbourne.</p>',
            '<p class="caption">Exhibited: Koorie Art Show, Koorie Heritage Trust, Melbourne, 2023</p>',
        ],
        images: [
            '/img/works/homecoming-face.jpg',
            '/img/works/homecoming-top.jpg',
            '/img/works/homecoming-back.jpg',
            '/img/works/homecoming-front.jpg',
            '/img/works/homecoming-cork.jpg'
        ],
        url: '/works/homecoming.html'
    },
    {
        slug: 'dingo',
        title: 'Dingo Vessel',
        year: '2021',
        medium: 'Terracotta; pit-fired',
        description: [
            '',
            '<p class="caption">Original sculpture in a private collection, Melbourne.</p>'
        ]
        images: [
            '/img/works/dingo_front-web.jpg',
            '/img/works/dingo_side-web.jpg',
            '/img/works/dingo_top-web.jpg'
        ],
        url: '/works/dingo.html'
    },
    {
        slug: 'bilby',
        title: 'Bilby Vessel',
        year: '2020',
        medium: 'Wild clay, sand; corymbia and eucalpt sap glaze; pit-fired',
        description: [
            '',
            '<p class="caption">Original sculpture in a private collection, Melbourne.</p>',
            '<p class="caption">Exhibited: Footscray Art Prize Shortlist, Footscray Art Center, Melbourne, 2021</p>'
        ]
        images: [
            '/img/works/bilby-face.png',
            '/img/works/bilby-side.png',
            '/img/works/bilby-hero.png',
            '/img/works/bilby-butt.png',
            '/img/works/bilby-back.png'
        ],
        url: '/works/bilby.html'
    },
    {
        slug: 'thylacine',
        title: 'Thylacine Vessel',
        year: '2020',
        medium: 'Terracotta; gas-fired to 1100C',
        description: [
            '',
            '<p class="caption">Original sculpture in a private collection, Warnambool.</p>'
        ]
        images: [
            '/img/works/thylacine-side-web.jpg'
        ],
        url: '/works/thylacine.html'
    },
    {
        slug: 'kalk-kalk',
        title: 'Kalk Kalk',
        year: '2024',
        medium: 'Tea-tree wood, Ringtail Possum pelt',
        description: [
            '',
            '<p class="caption">Original work in a private collection, London.</p>'
        ]
        images: [
            '/img/works/clapsticks-main.jpg',
            '/img/works/clapsticks-sticks.jpg',
            '/img/works/clapsticks-top.jpg'
        ],
        url: '/works/kalk-kalk.html'
    },
    {
        slug: 'dilly',
        title: 'Dillybag and Shell Holder',
        year: '2021',
        medium: 'Twine, raffia, paperbark',
        description: '',
        images: [
            '/img/works/dilly-shell-together.jpg',
            '/img/works/shell-side-up.jpg',
            '/img/works/shell-spilled.jpg',
            '/img/works/weave-close.jpg'
        ],
        url: '/works/dilly.html'
    }
];


/* ─── Prints data ────────────────────────────────────────── */

const prints = [
    {
        slug: 'ndos',
        title: 'Not Dead, Only Sleeping: Pre-fire',
        year: '2026',
        subtitle: 'Giclee print, 2026',
        parent: {
            label: 'Not Dead, Only Sleeping',
            url: '/works/not-dead-only-sleeping.html'
        },
        image: '/img/prints/ndos.jpg',
        imageAlt: 'Not Dead, Only Sleeping, photographed before firing',
        price: 'From £250',
        edition: 'Edition of 25, artist-signed and numbered.',
        material: '260gsm Pro Photo Lustre Paper, Epson K3 UltraChrome giclee print',
        size: '300 × 300mm',
        description: [
            'This print documents Not Dead, Only Sleeping in its unfired state: the delicate vessel as it was before pit-firing made it hard and immortal.',
            'Firing is never a neutral step in the artist\'s practice. Each piece is held and shaped like something deeply loved, and fire is dangerous. A vessel can crack, or even explode, under the stress of heat. She only fires a piece if she loves it enough to survive that danger; if not, the vessel is recycled, and given another chance to become something she can\'t bear to lose. Those that do undergo the alchemical process of firing are watched over closely, and any wounds the fire leaves behind are tended to and repaired by hand.',
            'This photograph is the only remaining record of Not Dead, Only Sleeping before that risk was taken - soft, whole, and innocent. This is the only way to own the piece as it existed then.',
            'Part of the artist\'s ongoing \'Pre-Fire\' series, in which selected works are photographed at this fleeting, unrepeatable stage before firing.'
        ],
        link: {
            text: 'View sculpture',
            href: '/works/not-dead-only-sleeping.html'
        },
        framingOptions: [
            { value: 'unframed', label: 'Unframed — £250' },
            { value: 'framed', label: 'Framed — £399' }
        ],
        caption: 'Submitting this form reserves your interest, you will receive a follow up by email to confirm payment and arrange shipping.',
        formSubject: 'NDOS Print Enquiry',
        url: '/prints/ndos.html'
    }
];