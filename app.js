const LIVE_UPDATES = window.WF_LIVE_UPDATES || {
  updatedAt: '2026-05-18',
  nextCheck: '2026-05-25',
  headline: 'Fresh local picks for parents in Willesden Green and nearby NW London',
  items: []
};

const DATA = {
  thisWeek: [
    {
      id: 'week-libraries',
      section: 'this-week',
      name: 'Willesden Green Library story / rhyme time',
      age: '0–5',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'Best low-effort plan for a weekday morning: stories, rhymes, crafts, and a warm indoor space.',
      recommendation: 'Easy win for rainy days and babies / toddlers.',
      tags: ['library', 'rhyme time', 'free'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/library-events',
      linkLabel: 'See library events',
      mapQuery: 'Willesden Green Library Centre, London',
      featured: true,
      cardTone: 'weekly'
    },
    {
      id: 'week-busy-rascals',
      section: 'this-week',
      name: 'Busy Rascals at The Queensbury',
      age: '0–5',
      cost: 'low',
      area: 'Willesden Green',
      blurb: 'Music, songs, rhymes, dancing, and a friendly social set-up for parents and little ones.',
      recommendation: 'Good if you want structure without pressure.',
      tags: ['stay and play', 'music', 'community'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/busy-rascals',
      linkLabel: 'Visit listing',
      mapQuery: 'The Queensbury, Willesden Green, London',
      featured: true,
      cardTone: 'weekly'
    },
    {
      id: 'week-brent-fwc',
      section: 'this-week',
      name: 'Brent Family Wellbeing Centres',
      age: '0–5',
      cost: 'free',
      area: 'Brent',
      blurb: 'Stay-and-play, support, and parenting help in one place. Very useful if you need somewhere with a soft landing.',
      recommendation: 'Good for families who want support as well as play.',
      tags: ['support', 'stay and play', 'health'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/support-for-parents-and-families/family-wellbeing-centres',
      linkLabel: 'Learn more',
      mapQuery: 'Brent Family Wellbeing Centres, Brent, London',
      featured: true,
      cardTone: 'weekly'
    },
    {
      id: 'week-quick-book',
      section: 'this-week',
      name: 'Book-ahead shortlist idea',
      age: 'all ages',
      cost: 'mid',
      area: 'NW London',
      blurb: 'Pick one paid activity, one free indoor backup, and one café stop. That is usually enough to survive the week.',
      recommendation: 'Use this site as your weekly planning stack.',
      tags: ['planning', 'calendar', 'shortlist'],
      contact: '#shortlist',
      linkLabel: 'Jump to shortlist',
      mapQuery: 'Willesden Green, London',
      featured: false,
      cardTone: 'weekly'
    }
  ],
  childcare: [
    {
      id: 'child-bright-horizons',
      section: 'childcare',
      name: "Bright Horizons Queen's Park",
      age: '0–5',
      cost: 'high',
      area: 'Queen’s Park',
      blurb: 'Full-day nursery option with a strong early-years reputation and a parent-friendly brand people already know.',
      recommendation: 'Worth shortlisting if you want a more formal nursery setting.',
      tags: ['nursery', 'full day', 'early years'],
      contact: 'https://www.brighthorizons.co.uk',
      linkLabel: 'Visit Bright Horizons',
      mapQuery: "Bright Horizons Queen's Park, London"
    },
    {
      id: 'child-monkey-puzzle',
      section: 'childcare',
      name: 'Monkey Puzzle Kensal Rise',
      age: '0–5',
      cost: 'high',
      area: 'Kensal Rise',
      blurb: 'Popular nursery choice with a familiar setting for local parents comparing options.',
      recommendation: 'Good if you want a mainstream nursery brand nearby.',
      tags: ['nursery', 'Kensal Rise', 'full day'],
      contact: 'https://www.monkeypuzzledaynurseries.co.uk',
      linkLabel: 'Visit Monkey Puzzle',
      mapQuery: 'Monkey Puzzle Day Nursery Kensal Rise, London'
    },
    {
      id: 'child-n-family',
      section: 'childcare',
      name: "N Family Club Queen's Park",
      age: '0–5',
      cost: 'high',
      area: 'Queen’s Park',
      blurb: 'Contemporary nursery chain with a polished feel for families who want a more design-led childcare option.',
      recommendation: 'Great if you like modern nursery environments.',
      tags: ['nursery', 'Queen’s Park', 'modern'],
      contact: 'https://www.nfamilyclub.com',
      linkLabel: 'Visit N Family Club',
      mapQuery: "N Family Club Queen's Park, London"
    },
    {
      id: 'child-little-garden',
      section: 'childcare',
      name: 'Little Garden Day Nursery & Forest School',
      age: '0–5',
      cost: 'high',
      area: 'Kensal Rise',
      blurb: 'Forest-school flavour nursery with outdoor emphasis for children who need lots of fresh air and movement.',
      recommendation: 'Strong pick for outdoorsy families.',
      tags: ['forest school', 'nursery', 'outdoors'],
      contact: 'https://www.littlegardendaynursery.com',
      linkLabel: 'Visit Little Garden',
      mapQuery: 'Little Garden Day Nursery Kensal Rise, London'
    },
    {
      id: 'child-richborough',
      section: 'childcare',
      name: 'Richborough Nursery & Pre-school',
      age: '6 months–5',
      cost: 'mid',
      area: 'Cricklewood',
      blurb: 'Private, home-based nursery with a strong home-from-home feel, EYFS learning, and close parent communication.',
      recommendation: 'A good fit if you want a small, nurturing Cricklewood nursery.',
      tags: ['nursery', 'pre-school', 'Cricklewood', 'EYFS'],
      contact: 'https://www.richboroughnursery.co.uk/',
      linkLabel: 'Visit Richborough Nursery',
      mapQuery: 'Richborough Nursery & Pre-school, Cricklewood, London'
    },
    {
      id: 'child-mulberry-house',
      section: 'childcare',
      name: 'The Mulberry House School',
      age: '2–7',
      cost: 'high',
      area: 'West Hampstead',
      blurb: 'Independent early-years and prep school with a nursery-style entry point and a strong nurturing ethos.',
      recommendation: 'Good if you want a more academic early-years route near West Hampstead.',
      tags: ['early years', 'nursery', 'West Hampstead', 'independent'],
      contact: 'https://www.mulberryhouseschool.com/',
      linkLabel: 'Visit Mulberry House',
      mapQuery: 'The Mulberry House School, West Hampstead, London'
    },
    {
      id: 'child-broadhurst',
      section: 'childcare',
      name: 'Broadhurst School',
      age: '2–5',
      cost: 'high',
      area: 'West Hampstead',
      blurb: 'Independent nursery and pre-prep school with a dedicated early-learning focus and a well-established local reputation.',
      recommendation: 'Strong candidate if you want a premium nursery/pre-prep close to the area.',
      tags: ['nursery', 'pre-prep', 'West Hampstead', 'independent'],
      contact: 'https://www.broadhurstschool.com/',
      linkLabel: 'Visit Broadhurst School',
      mapQuery: 'Broadhurst School, West Hampstead, London'
    },
    {
      id: 'child-rainbow-montessori',
      section: 'childcare',
      name: 'Rainbow Montessori',
      age: '2–5',
      cost: 'mid',
      area: 'NW London',
      blurb: 'Montessori-style early years option for children who like practical, child-led learning.',
      recommendation: 'Good if you prefer a calmer learning approach.',
      tags: ['Montessori', 'nursery', 'early years'],
      contact: 'https://www.google.com/search?q=Rainbow+Montessori+Willesden+Green',
      linkLabel: 'Search details',
      mapQuery: 'Rainbow Montessori, Willesden Green, London'
    },
    {
      id: 'child-malorees',
      section: 'childcare',
      name: 'Malorees Infant & Nursery School',
      age: '2–7',
      cost: 'free',
      area: 'Brondesbury / NW6',
      blurb: 'Nursery and infant provision in a local school setting — useful if you want continuity into primary.',
      recommendation: 'Worth a visit for school-based early years.',
      tags: ['nursery class', 'school', 'free'],
      contact: './schools.html',
      linkLabel: 'Open schools page',
      mapQuery: 'Malorees Infant and Nursery School, London'
    },
    {
      id: 'child-princess-frederica',
      section: 'childcare',
      name: 'Princess Frederica C of E Nursery School',
      age: '2–5',
      cost: 'free',
      area: 'Willesden / NW10',
      blurb: 'Nursery school option with school-style routines and a local community feel.',
      recommendation: 'A solid school-nursery route for families wanting structure.',
      tags: ['nursery school', 'free', 'school-based'],
      contact: './schools.html',
      linkLabel: 'Open schools page',
      mapQuery: 'Princess Frederica C of E Nursery School, London'
    },
    {
      id: 'child-beckford-nursery',
      section: 'childcare',
      name: 'Beckford Primary Nursery',
      age: '3–5',
      cost: 'free',
      area: 'Willesden / NW10',
      blurb: 'Nursery provision attached to a primary school for a straightforward transition later on.',
      recommendation: 'Useful if you want nursery-to-primary continuity.',
      tags: ['nursery', 'primary school', 'free'],
      contact: './schools.html',
      linkLabel: 'Open schools page',
      mapQuery: 'Beckford Primary School, London'
    },
    {
      id: 'child-treetops',
      section: 'childcare',
      name: 'Treetops Nursery School',
      age: '0–5',
      cost: 'high',
      area: 'Willesden / NW10',
      blurb: 'Childcare nursery and pre-school based in Willesden, close to King Edward VII Park and Willesden Sports Centre.',
      recommendation: 'Strong local all-day childcare option if you want something very close to home.',
      tags: ['nursery', 'pre-school', 'outdoors'],
      contact: 'https://www.treetopsnursery.co.uk/book-a-visit/',
      linkLabel: 'Arrange a visit',
      mapQuery: 'Treetops Nursery School, Doyle Gardens, London'
    },
    {
      id: 'child-happy-hands-willesden',
      section: 'childcare',
      name: 'Happy Hands Montessori Nursery (Willesden)',
      age: '2–5',
      cost: 'high',
      area: 'Willesden',
      blurb: 'Montessori nursery with a Willesden site, for families who want a calmer early-years environment.',
      recommendation: 'Good if you prefer Montessori style care.',
      tags: ['montessori', 'nursery', 'willesden'],
      contact: 'https://www.happyhandsmontessorinursery.co.uk/enrollment-forms/',
      linkLabel: 'Register interest',
      mapQuery: 'Happy Hands Montessori Nursery, Willesden, London'
    },
    {
      id: 'child-dollis-hill',
      section: 'childcare',
      name: 'N Family Club Dollis Hill',
      age: '0–5',
      cost: 'high',
      area: 'Dollis Hill',
      blurb: 'Purpose-built modern nursery on Dudden Hill Lane with long opening hours.',
      recommendation: 'Good for families needing flexible hours and a polished setting.',
      tags: ['nursery', 'long hours', 'modern'],
      contact: 'https://www.nfamilyclub.com/n-dollis-hill/',
      linkLabel: 'See the nursery',
      mapQuery: '82 Dudden Hill Lane, Dollis Hill, London'
    },
    {
      id: 'child-wetherby-kensal',
      section: 'childcare',
      name: 'Wetherby House Montessori Kensal Rise',
      age: '0–5',
      cost: 'high',
      area: 'Kensal Rise',
      blurb: 'Montessori nursery on Purves Road, close enough for most Willesden Green families.',
      recommendation: 'Good if you want a Montessori-led setting nearby.',
      tags: ['montessori', 'nursery', 'Kensal Rise'],
      contact: 'https://www.wetherbyhouse.com/montessori-kensalrise-london',
      linkLabel: 'Visit Wetherby House',
      mapQuery: 'Wetherby House Montessori Kensal Rise, London'
    },
    {
      id: 'child-brondesbury-nursery',
      section: 'childcare',
      name: 'Brondesbury Park Synagogue Nursery',
      age: '0–5',
      cost: 'mid',
      area: 'Brondesbury Park',
      blurb: 'Small local nursery setting near Brondesbury Park, with Ofsted-listed provision and an established neighbourhood feel.',
      recommendation: 'Worth checking if you want a smaller community nursery.',
      tags: ['nursery', 'community', 'Brondesbury Park'],
      contact: 'https://www.bparknursery.co.uk/',
      linkLabel: 'Visit BPark Nursery',
      mapQuery: 'Brondesbury Park Synagogue Nursery, London'
    },
    {
      id: 'child-kensal-house',
      section: 'childcare',
      name: 'Kensal House Nursery',
      age: '0–5',
      cost: 'mid',
      area: 'Kensal Green',
      blurb: 'Local nursery on Harrow Road with an up-to-date Ofsted presence and a straightforward west-London commute.',
      recommendation: 'Useful if you’re looking across Kensal Green as well as Willesden.',
      tags: ['nursery', 'Kensal Green', 'full day'],
      contact: 'https://www.google.com/search?q=Kensal+House+Nursery+London',
      linkLabel: 'Search details',
      mapQuery: 'Kensal House Nursery, London'
    },
    {
      id: 'child-college-green',
      section: 'childcare',
      name: 'College Nursery School & Services',
      age: '2–5',
      cost: 'free',
      area: 'Kensal Rise',
      blurb: 'School-linked nursery provision at College Road, showing up strongly in local nursery listings.',
      recommendation: 'Good free option if you’re happy with a school-linked setting.',
      tags: ['nursery', 'free', 'school-linked'],
      contact: 'https://www.google.com/search?q=College+Nursery+School+%26+Services+Kensal+Rise',
      linkLabel: 'Search details',
      mapQuery: 'College Nursery School & Services, Kensal Rise, London'
    },
    {
      id: 'child-anson-primary',
      section: 'childcare',
      name: 'Anson Primary Nursery',
      age: '3–5',
      cost: 'free',
      area: 'Cricklewood / NW2',
      blurb: 'Primary-school nursery provision just north-east of Willesden Green.',
      recommendation: 'Handy if you want a maintained nursery class close by.',
      tags: ['nursery class', 'primary school', 'free'],
      contact: 'https://www.ansonprimaryschool.com',
      linkLabel: 'Visit school',
      mapQuery: 'Anson Primary School, London'
    },
    {
      id: 'child-busy-bees-harlesden',
      section: 'childcare',
      name: 'Busy Bees Harlesden',
      age: '0–5',
      cost: 'high',
      area: 'Harlesden',
      blurb: 'Purpose-built nursery near Willesden Junction with a strong local profile and long day-care hours.',
      recommendation: 'Good if you want a well-known nursery chain in the neighbourhood.',
      tags: ['nursery', 'Harlesden', 'full day'],
      contact: 'https://www.busybeeschildcare.co.uk/nursery/london-harlesden',
      linkLabel: 'Visit nursery',
      mapQuery: 'Busy Bees Harlesden, 59a Longstone Avenue, London NW10 3UN'
    },
    {
      id: 'child-busy-bees-kilburn',
      section: 'childcare',
      name: 'Busy Bees Kilburn',
      age: '0–5',
      cost: 'high',
      area: 'Kilburn',
      blurb: 'Busy Bees nursery in Kilburn Square, useful for families comparing options across NW6.',
      recommendation: 'Good if you want a central, established nursery brand.',
      tags: ['nursery', 'Kilburn', 'full day'],
      contact: 'https://www.busybeeschildcare.co.uk/nursery/london-kilburn',
      linkLabel: 'Visit nursery',
      mapQuery: 'Busy Bees Kilburn Square, London NW6 6QG'
    },
    {
      id: 'child-wetherby-queens-park',
      section: 'childcare',
      name: 'Wetherby House Montessori Queen\'s Park',
      age: '0–5',
      cost: 'high',
      area: 'Queen’s Park',
      blurb: 'Montessori nursery opening in Queen’s Park, adding another local option for families who like that approach.',
      recommendation: 'Worth a look if you want a Montessori nursery in NW6.',
      tags: ['montessori', 'nursery', 'Queen’s Park'],
      contact: 'https://www.wetherbyhouse.com/montessori-queens-park-london',
      linkLabel: 'Visit nursery',
      mapQuery: 'Wetherby House Montessori Queen\'s Park, London'
    },
    {
      id: 'child-snuggle-bunnies',
      section: 'childcare',
      name: 'Snuggle Bunnies Nursery',
      age: '0–5',
      cost: 'mid',
      area: 'Kingsbury',
      blurb: 'Community nursery in Kingsbury with a local family feel and home-nursery style setting.',
      recommendation: 'Useful if you are widening the search east/north of Willesden.',
      tags: ['nursery', 'Kingsbury', 'community'],
      contact: 'https://www.snugglebunniesnursery.co.uk/',
      linkLabel: 'Visit nursery',
      mapQuery: 'Snuggle Bunnies Nursery, Kingsbury, London NW9'
    },
    {
      id: 'child-bright-star-kilburn',
      section: 'childcare',
      name: 'Bright Star Day Nursery Kilburn',
      age: '0–5',
      cost: 'high',
      area: 'Kilburn',
      blurb: 'Kilburn nursery with early-years provision for babies through pre-schoolers.',
      recommendation: 'Good if you want a term-time friendly nursery near NW6.',
      tags: ['nursery', 'Kilburn', 'babies'],
      contact: 'https://www.brightstardaynursery.co.uk/',
      linkLabel: 'Visit nursery',
      mapQuery: 'Bright Star Day Nursery, 1 Stafford Road, London NW6 5RS'
    }
  ],
  camps: [
    {
      id: 'camp-fresh-arts-queens-park',
      section: 'camps',
      name: 'Queens Park Holiday Camp (Fresh Arts)',
      age: '5–11',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Performing arts holiday camp at Salusbury Primary School, with 9am–3pm days and weekly blocks seen in the 2025 guide.',
      recommendation: 'Best if your child likes theatre, music, and a structured camp day.',
      tags: ['holiday camp', 'performing arts', 'summer'],
      contact: 'https://fresharts.classforkids.io/camp/116',
      linkLabel: 'Book camp',
      mapQuery: 'Salusbury Primary School, Salusbury Road, London NW6 6RG',
      featured: true
    },
    {
      id: 'camp-seed-of-life-half-term',
      section: 'camps',
      name: 'The Seed of Life — May Half-Term Play Scheme',
      age: '2½–5',
      cost: 'low',
      area: 'Wembley',
      blurb: 'Half-term play scheme at Happy Days Montessori School on Empire Way, with creative play, science, gardening, karate, trampoline time, and a sand pit.',
      recommendation: 'Good if you want a friendly early-years holiday club with a clear daily rate and manageable hours.',
      tags: ['half-term', 'play scheme', 'early years', 'Wembley'],
      contact: 'https://www.happydaysmontessori.co.uk/',
      linkLabel: 'Visit school',
      mapQuery: 'Happy Days Montessori School, Empire Way, Wembley HA9 0RJ',
      promoImage: './assets/seed-of-life-half-term.jpg',
      promoAlt: 'The Seed of Life May Half-Term Play Scheme flyer',
      featured: true
    },
    {
      id: 'camp-jag-willesden-sports-centre',
      section: 'camps',
      name: 'Willesden Sports Centre Holiday HQ',
      age: '5–11',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Junior Adventures Group runs holiday clubs at Willesden Sports Centre with sports, games, and themed activities.',
      recommendation: 'Great local option if you need reliable childcare-hours coverage.',
      tags: ['holiday club', 'sports', 'breakfast'],
      contact: 'https://www.junioradventuresgroup.co.uk/find-us/willesden-sports-centre/',
      linkLabel: 'See holiday club',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10 3QX'
    },
    {
      id: 'camp-holiday-academy',
      section: 'camps',
      name: 'Holiday Academy London',
      age: '3–12',
      cost: 'high',
      area: 'NW1',
      blurb: 'STEAM day camp plus forest school, with long hours from 8:30am–6pm and flexible age groups.',
      recommendation: 'Useful if you need full-day wraparound during the holidays.',
      tags: ['steam', 'forest school', 'long day'],
      contact: 'https://holidayacademy.co.uk/',
      linkLabel: 'Book here',
      mapQuery: 'Holiday Academy London, NW1'
    },
    {
      id: 'camp-nwga-queens-park',
      section: 'camps',
      name: 'Nile Wilson Gymnastics Academy',
      age: '4–11',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Gymnastics and circus-skills camps, including Queen’s Park sessions for children who like active days.',
      recommendation: 'Best if your child needs to burn energy and likes coaching-led sport.',
      tags: ['gymnastics', 'circus', 'sport'],
      contact: 'https://nwga.co.uk/holiday-camps/',
      linkLabel: 'Open camps',
      mapQuery: 'Queen\'s Park, London NW6'
    },
    {
      id: 'camp-apf-brent',
      section: 'camps',
      name: 'APF Brent Holiday Camps',
      age: '4–14',
      cost: 'mid',
      area: 'Brent / Bridge Park',
      blurb: 'Multi-activity holiday camps with archery, football, basketball, arts and crafts, and age-grouped sessions.',
      recommendation: 'Good broad-appeal option if siblings need different pace levels.',
      tags: ['multi-activity', 'sports', 'holiday club'],
      contact: 'https://apfactivitycamps.org/brent-holiday-camps/',
      linkLabel: 'See Brent camps',
      mapQuery: 'Bridge Park Leisure Centre, Brent, London'
    },
    {
      id: 'camp-brent-haf',
      section: 'camps',
      name: 'Brent HAF holiday places',
      age: 'eligible families',
      cost: 'free',
      area: 'Brent',
      blurb: 'Brent Council’s Holiday Activities and Food programme for eligible children during school holidays.',
      recommendation: 'Best free route if you qualify for HAF support.',
      tags: ['free', 'HAF', 'school holidays'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/childcare-and-early-education/holiday-activities-and-food-programme',
      linkLabel: 'Check eligibility',
      mapQuery: 'Brent Council, London'
    },
    {
      id: 'camp-breezy-club',
      section: 'camps',
      name: 'The Breezy Club',
      age: '4–12',
      cost: 'mid',
      area: 'North London',
      blurb: 'Multi-activity holiday club at APS and St Martin of Porres Primary School with games, sports, and creative activities.',
      recommendation: 'Good if you want a lively school-based holiday club with a local North London feel.',
      tags: ['holiday club', 'multi-activity', 'north london'],
      contact: 'https://www.thebreezyclub.co.uk/',
      linkLabel: 'Book club',
      mapQuery: 'The Breezy Club, Alexandra Park School, London'
    },
    {
      id: 'camp-little-dance-queens-park',
      section: 'camps',
      name: 'The Little Dance Academy — Queen\'s Park',
      age: '3–12',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Dance and movement holiday camps in Queen’s Park, with a local branch serving nearby families.',
      recommendation: 'Strong if your child likes dance, movement, and a more creative camp day.',
      tags: ['dance', 'creative', 'holiday camp'],
      contact: 'https://thelittledanceacademy.com/queens-park/',
      linkLabel: 'View camps',
      mapQuery: 'Queen’s Park, London'
    },
    {
      id: 'camp-dance-by-the-park',
      section: 'camps',
      name: 'Dance by the Park',
      age: '5–11',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Dance-led holiday camp with creative movement, outdoor play, and a showcase at the end of the week.',
      recommendation: 'Great if you want a structured creative camp rather than sports-only days.',
      tags: ['dance', 'performance', 'outdoors'],
      contact: 'https://hedanceacademy.co.uk/elementor-2737/',
      linkLabel: 'See camp',
      mapQuery: 'Queen’s Park, London NW6'
    },
    {
      id: 'camp-club-excel-qpcs',
      section: 'camps',
      name: 'Club Excel Multi Activity Camp — Queen\'s Park Community School',
      age: 'reception–year 8',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Big multi-activity day camp at Queen’s Park Community School with sports, theatre, football, and arts-led streams.',
      recommendation: 'Useful if you need a wide age spread and lots of activity choice.',
      tags: ['multi-activity', 'sports', 'theatre'],
      contact: 'https://www.clubexcel.co.uk/location/queens-park-community-college/',
      linkLabel: 'Open venue',
      mapQuery: 'Queens Park Community School, London'
    },
    {
      id: 'camp-serving-winners',
      section: 'camps',
      name: 'Serving Winners Holiday Camps',
      age: '5–13',
      cost: 'mid',
      area: 'North West London',
      blurb: 'Tennis holiday camps with half-day and full-day options across North West London.',
      recommendation: 'Good if you want a focused racket-sports camp.',
      tags: ['tennis', 'sport', 'holiday camp'],
      contact: 'https://www.servingwinners.co.uk/holiday-camps',
      linkLabel: 'View camps',
      mapQuery: 'North West London'
    },
    {
      id: 'camp-mother-nature-science',
      section: 'camps',
      name: 'Mother Nature Science Camp',
      age: '5–12',
      cost: 'mid',
      area: 'North West London',
      blurb: 'Science holiday club with hands-on experiments and activities running across North West London.',
      recommendation: 'Great if you want a more academic or STEM-flavoured camp.',
      tags: ['science', 'STEM', 'holiday club'],
      contact: 'https://www.mnature.co.uk/',
      linkLabel: 'Visit camp',
      mapQuery: 'North West London'
    },
    {
      id: 'camp-msport-active',
      section: 'camps',
      name: 'MSport Active Kidz Holiday Camp',
      age: '4–12',
      cost: 'mid',
      area: 'London',
      blurb: 'Multi-sport and activities camp with arts, crafts, football, and active play during school holidays.',
      recommendation: 'Good if you want a dependable active childcare option.',
      tags: ['sports', 'active', 'holiday camp'],
      contact: 'https://www.msportactive.co.uk/holiday-camp',
      linkLabel: 'Book camp',
      mapQuery: 'London'
    },
    {
      id: 'camp-petite-performers-west-hampstead',
      section: 'camps',
      name: 'Petite Performers — West Hampstead',
      age: '3–8',
      cost: 'mid',
      area: 'West Hampstead',
      blurb: 'Performing arts holiday camps with dance, drama, singing, and crafts in West Hampstead.',
      recommendation: 'Strong if your child prefers a creative, smaller-scale camp.',
      tags: ['performing arts', 'creative', 'holiday camp'],
      contact: 'https://www.thepetiteperformers.com/West-Hampstead',
      linkLabel: 'View camp',
      mapQuery: 'West Hampstead, London NW6'
    },
    {
      id: 'camp-rocket-club-kensal-rise',
      section: 'camps',
      name: 'Rocket Club — Kensal Rise',
      age: '4–12',
      cost: 'mid',
      area: 'Kensal Rise',
      blurb: 'Creative holiday camp for kids in Kensal Rise, run at the Scout Hall / Scout Hut in NW10.',
      recommendation: 'Good if you want something playful and community-based.',
      tags: ['creative', 'holiday club', 'Kensal Rise'],
      contact: 'https://www.queensparkfolk.com/qpfguides/a-local-guide-to-half-term-camps-and-activities-this-feb-2026-in-queens-park-kensal-rise-and-beyond',
      linkLabel: 'Local guide',
      mapQuery: 'Kensal Rise, London NW10'
    }
  ],
  cafes: [
    {
      id: 'cafe-hearth',
      section: 'cafes',
      name: 'The Hearth',
      age: 'all ages',
      cost: 'low',
      area: 'Queen’s Park',
      blurb: 'Warm, community-minded indoor spot that works well with buggies, toddlers, or a playdate stop.',
      recommendation: 'Best all-round café for a parent reset.',
      tags: ['café', 'community', 'lunch'],
      contact: 'https://thehearth.org.uk',
      linkLabel: 'Visit The Hearth',
      mapQuery: 'The Hearth, Queen\'s Park, London',
      mapPinned: true
    },
    {
      id: 'cafe-queens-park-books',
      section: 'cafes',
      name: 'Queens Park Books',
      age: 'all ages',
      cost: 'low',
      area: 'Queen’s Park',
      blurb: 'Bookshop stop with an easy parent-friendly vibe. Good for a quiet browse and a child in a buggy or on the floor.',
      recommendation: 'Lovely for calm time rather than a big outing.',
      tags: ['bookshop', 'indoor', 'quiet'],
      contact: 'https://www.google.com/search?q=Queens+Park+Books+London',
      linkLabel: 'Search details',
      mapQuery: 'Queens Park Books, London'
    },
    {
      id: 'cafe-willesden-library',
      section: 'cafes',
      name: 'Willesden Green Library Centre café area',
      age: 'all ages',
      cost: 'low',
      area: 'Willesden Green',
      blurb: 'A simple, reliable indoors option when you want books, toilets, space, and a warm drink.',
      recommendation: 'Great default option for a wet day.',
      tags: ['library', 'café', 'books'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/library-events',
      linkLabel: 'See library page',
      mapQuery: 'Willesden Green Library Centre, London'
    },
    {
      id: 'cafe-maqam',
      section: 'cafes',
      name: 'The Maqam Centre café',
      age: 'all ages',
      cost: 'mid',
      area: 'NW10',
      blurb: 'Family-friendly venue with an easy café stop attached to lessons, classes, or a catch-up with other parents.',
      recommendation: 'Useful if you want a venue with built-in activities.',
      tags: ['venue', 'family-friendly', 'classes'],
      contact: 'https://themaqamcentre.com',
      linkLabel: 'Visit The Maqam Centre',
      mapQuery: 'The Maqam Centre, Wrentham Avenue, London'
    },
    {
      id: 'cafe-local-park',
      section: 'cafes',
      name: 'Parks and café stop combo',
      age: 'all ages',
      cost: 'low',
      area: 'NW London',
      blurb: 'A good strategy, not just a place: park first, café second, then home before the meltdown.',
      recommendation: 'Recommended for the sanity-saving loop.',
      tags: ['park', 'coffee', 'routine'],
      contact: '#activities',
      linkLabel: 'See nearby parks',
      mapQuery: 'Queen\'s Park, London'
    },
    {
      id: 'cafe-respite',
      section: 'cafes',
      name: 'Buggy-friendly neighbourhood café run',
      age: '0–5',
      cost: 'mid',
      area: 'Willesden / Kensal',
      blurb: 'A flexible catch-all for the parent cafés on your regular rotation. Use the map to choose the closest one.',
      recommendation: 'Best when you just need to get out of the house.',
      tags: ['coffee', 'buggy-friendly', 'routine'],
      contact: '#map',
      linkLabel: 'Pick on the map',
      mapQuery: 'Willesden Green, London'
    }
  ],
  indoor: [
    {
      id: 'indoor-library',
      section: 'indoor',
      name: 'Willesden Green Library Centre',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'The best all-weather base: books, toilets, story sessions, and usually less chaos than a soft play.',
      recommendation: 'Top rainy-day fallback for most families.',
      tags: ['library', 'rainy day', 'free'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/library-events',
      linkLabel: 'Open events',
      mapQuery: 'Willesden Green Library Centre, London',
      mapPinned: true
    },
    {
      id: 'indoor-hearth',
      section: 'indoor',
      name: 'The Hearth',
      age: 'all ages',
      cost: 'low',
      area: 'Queen’s Park',
      blurb: 'Indoor community space with food and room to breathe. Useful when parks are off the table.',
      recommendation: 'Good for meeting another parent and not needing a plan.',
      tags: ['café', 'community', 'warm'],
      contact: 'https://thehearth.org.uk',
      linkLabel: 'Visit The Hearth',
      mapQuery: 'The Hearth, Queen\'s Park, London'
    },
    {
      id: 'indoor-books',
      section: 'indoor',
      name: 'Queens Park Books',
      age: 'all ages',
      cost: 'low',
      area: 'Queen’s Park',
      blurb: 'A quiet indoor option for a browse, a story pause, or a quick reset on the way home.',
      recommendation: 'Best for calmer children or one-on-one time.',
      tags: ['bookshop', 'quiet', 'indoor'],
      contact: 'https://www.google.com/search?q=Queens+Park+Books+London',
      linkLabel: 'Search details',
      mapQuery: 'Queens Park Books, London'
    },
    {
      id: 'indoor-swim',
      section: 'indoor',
      name: 'Swimming Nature at The Maqam',
      age: '3–12',
      cost: 'mid',
      area: 'NW10',
      blurb: 'Indoor swim sessions that can rescue an afternoon and burn energy without needing dry weather.',
      recommendation: 'Good for tiring children out responsibly.',
      tags: ['swimming', 'lessons', 'indoor'],
      contact: 'https://swimmingnature.com/our-pools/the-maqam-centre',
      linkLabel: 'Visit swimming page',
      mapQuery: 'The Maqam Centre, Wrentham Avenue, London'
    },
    {
      id: 'indoor-softplay',
      section: 'indoor',
      name: 'Soft-play style venue / playdate fallback',
      age: '1–7',
      cost: 'mid',
      area: 'NW London',
      blurb: 'A catch-all slot for the indoor venue you reach for when everyone is bouncing off the walls.',
      recommendation: 'Use when you need movement more than entertainment.',
      tags: ['indoor', 'energy burn', 'playdate'],
      contact: '#cafes',
      linkLabel: 'See family venues',
      mapQuery: 'NW London, England'
    },
    {
      id: 'indoor-home',
      section: 'indoor',
      name: 'At-home rainy-day ideas',
      age: '0–8',
      cost: 'free',
      area: 'home',
      blurb: 'If you do not want to go out, build a tiny plan: craft, music, snack, then one calm job you can finish.',
      recommendation: 'Use this when the weather wins.',
      tags: ['home', 'craft', 'plan'],
      contact: '#this-week',
      linkLabel: 'Back to this week',
      mapQuery: 'Willesden Green, London'
    }
  ],
  send: [
    {
      id: 'send-local-offer',
      section: 'send',
      name: 'Brent Local Offer',
      age: 'all ages',
      cost: 'free',
      area: 'Brent',
      blurb: 'The most important starting point for SEND support, local services, and signposting.',
      recommendation: 'Start here before you do anything else.',
      tags: ['SEND', 'local offer', 'support'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/the-local-offer',
      linkLabel: 'Open Local Offer',
      mapQuery: 'Brent Council, Wembley, London'
    },
    {
      id: 'send-family-info',
      section: 'send',
      name: 'Brent Family Information Service',
      age: 'all ages',
      cost: 'free',
      area: 'Brent',
      blurb: 'Useful for parents who need the practical version: who, where, and what to do next.',
      recommendation: 'Very handy as a navigation layer.',
      tags: ['family support', 'information', 'support'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/family-information-service',
      linkLabel: 'Open FIS',
      mapQuery: 'Brent Family Information Service, London'
    },
    {
      id: 'send-contact',
      section: 'send',
      name: 'Contact',
      age: 'all ages',
      cost: 'free',
      area: 'national',
      blurb: 'National charity for families with disabled children, with practical advice and parent-to-parent clarity.',
      recommendation: 'Excellent if you need plain-English guidance.',
      tags: ['charity', 'disability', 'advice'],
      contact: 'https://contact.org.uk',
      linkLabel: 'Visit Contact',
      mapQuery: 'Contact charity, UK'
    },
    {
      id: 'send-ipsea',
      section: 'send',
      name: 'IPSEA',
      age: 'all ages',
      cost: 'free',
      area: 'national',
      blurb: 'Independent special educational advice and legal guidance for parents navigating school support.',
      recommendation: 'Best when you need to understand rights and next steps.',
      tags: ['legal', 'SEN', 'education'],
      contact: 'https://www.ipsea.org.uk',
      linkLabel: 'Visit IPSEA',
      mapQuery: 'IPSEA, UK'
    },
    {
      id: 'send-inclusive-activities',
      section: 'send',
      name: 'Inclusive activities with parent review',
      age: '0–8',
      cost: 'varies',
      area: 'NW London',
      blurb: 'Look for smaller groups, predictable routines, quiet start times, and venues that welcome adaptations.',
      recommendation: 'Use the filters and shortlist to find calmer options.',
      tags: ['inclusive', 'quiet', 'adaptations'],
      contact: '#activities',
      linkLabel: 'See activities',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'send-ask-parents',
      section: 'send',
      name: 'Parent recommendation note',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden',
      blurb: 'The best SEND-friendly places often show up in parent chats before they show up in directories.',
      recommendation: 'Keep an eye on the shortlist and update it often.',
      tags: ['recommendation', 'community', 'tips'],
      contact: '#shortlist',
      linkLabel: 'Go to shortlist',
      mapQuery: 'Willesden, London'
    }
  ],
  activities: [
    {
      id: 'act-baby-swim',
      section: 'activities',
      name: 'Swimming Nature (baby & child swim)',
      age: '0–5',
      cost: 'mid',
      area: 'The Maqam Centre',
      blurb: 'Indoor swim lessons for babies and children, useful year-round and a good energy-burn option.',
      recommendation: 'Strong if you already like structured classes.',
      tags: ['swim', 'lessons', 'indoor'],
      contact: 'https://swimmingnature.com/our-pools/the-maqam-centre',
      linkLabel: 'Visit swimming lessons',
      mapQuery: 'The Maqam Centre, Wrentham Avenue, London'
    },
    {
      id: 'act-busy-rascals',
      section: 'activities',
      name: 'Busy Rascals',
      age: '0–5',
      cost: 'low',
      area: 'The Queensbury',
      blurb: 'Music, rhymes, dance, and a baby-friendly social space.',
      recommendation: 'Good for meeting other parents locally.',
      tags: ['music', 'stay and play', 'community'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/busy-rascals',
      linkLabel: 'View listing',
      mapQuery: 'The Queensbury, Willesden Green, London'
    },
    {
      id: 'act-classes',
      section: 'activities',
      name: 'Local classes on ClassForKids',
      age: '0–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'A good catch-all for gym, dance, football, capoeira, and other repeat sessions.',
      recommendation: 'Best if you want regular weekly structure.',
      tags: ['classes', 'sports', 'music'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-parks',
      section: 'activities',
      name: 'Queen’s Park',
      age: 'all ages',
      cost: 'free',
      area: 'NW6',
      blurb: 'Playground, paddling pool, petting farm, and an easy family outing with enough moving parts to last the morning.',
      recommendation: 'One of the best all-round family parks nearby.',
      tags: ['park', 'playground', 'outdoors'],
      contact: 'https://www.dayoutwiththekids.co.uk/attractions/queens-park-london-722053dd',
      linkLabel: 'Open park info',
      mapQuery: "Queen's Park, London"
    },
    {
      id: 'act-roundwood',
      section: 'activities',
      name: 'Roundwood Park',
      age: 'all ages',
      cost: 'free',
      area: 'Harlesden',
      blurb: 'Reliable open space for scooters, movement, and a reset without spending money.',
      recommendation: 'Best low-effort outdoor option.',
      tags: ['park', 'free', 'outdoors'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/roundwood-park',
      linkLabel: 'Open park page',
      mapQuery: 'Roundwood Park, London',
      promoImage: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Roundwood_Park.jpg',
      promoAlt: 'Roundwood Park in London'
    },
    {
      id: 'act-gladstone',
      section: 'activities',
      name: 'Gladstone Park',
      age: 'all ages',
      cost: 'free',
      area: 'Dollis Hill',
      blurb: 'Nature trails, sports courts, duck pond, and playgrounds. A proper long-run option when you need space.',
      recommendation: 'Useful for siblings with different energy levels.',
      tags: ['park', 'nature', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/gladstone-park',
      linkLabel: 'Open park page',
      mapQuery: 'Gladstone Park, London',
      promoImage: 'https://gladstoneparkfriends.org/wp-content/uploads/2016/03/evening-light-on-trees.jpeg',
      promoAlt: 'Gladstone Park at evening light'
    },
    {
      id: 'act-mapesbury',
      section: 'activities',
      name: 'Mapesbury Dell',
      age: 'all ages',
      cost: 'free',
      area: 'NW2',
      blurb: 'Small hidden-gem garden space with water features and a calmer pace than the bigger parks.',
      recommendation: 'Great when you want less noise.',
      tags: ['garden', 'quiet', 'free'],
      contact: 'https://www.google.com/search?q=Mapesbury+Dell',
      linkLabel: 'Search details',
      mapQuery: 'Mapesbury Dell, London',
      promoImage: 'http://www.mapesbury-dell.org/s/cc_images/thumb_6487547.jpg',
      promoAlt: 'Mapesbury Dell garden and water feature'
    },
    {
      id: 'act-forest-school',
      section: 'activities',
      name: 'The Friendly Forest School',
      age: '4–11',
      cost: 'mid',
      area: 'Malorees / NW6',
      blurb: 'Forest-school style activities with a strong outdoors feel.',
      recommendation: 'Ideal if your child thrives outdoors.',
      tags: ['forest school', 'outdoors', 'holiday'],
      contact: 'https://thefriendlyforestschool.com',
      linkLabel: 'Visit forest school',
      mapQuery: 'Malorees School, Christchurch Avenue, London',
      promoImage: 'https://c-p.rmcdn.net/63a1a269dbce7700133e81ea/4856259/Screenshot-8a7d15b4-16f0-4919-a0cd-49a12605bb50_readyscr_1024.jpg',
      promoAlt: 'The Friendly Forest School outdoors image'
    },
    {
      id: 'act-the-playmap',
      section: 'activities',
      name: 'Playgroups via The Play Map',
      age: '0–5',
      cost: 'free',
      area: 'Brent',
      blurb: 'A practical route to stay-and-play groups, toddler sessions, and parent chatter.',
      recommendation: 'Best if you like checking what is happening before you leave the house.',
      tags: ['playgroup', 'stay and play', 'free'],
      contact: 'https://www.theplaymap.co.uk/playgroups/stay-and-play-in-brent',
      linkLabel: 'Browse playgroups',
      mapQuery: 'Brent, London'
    },
    {
      id: 'act-brent-museum',
      section: 'activities',
      name: 'Brent Museum',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'Local museum at Willesden Green Library Centre with exhibitions, heritage displays, and an easy outing when you want something calm.',
      recommendation: 'Best close-to-home indoor culture pick.',
      tags: ['museum', 'free', 'indoor'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/brent-museum-and-archives',
      linkLabel: 'Open museum page',
      mapQuery: 'Brent Museum, Willesden Green, London',
      featured: true
    },
    {
      id: 'act-lexi-cinema',
      section: 'activities',
      name: 'The Lexi Cinema',
      age: 'all ages',
      cost: 'mid',
      area: 'Kensal Rise',
      blurb: 'Independent social-enterprise cinema on Chamberlayne Road, good for a parent-and-child film outing.',
      recommendation: 'Best nearby cinema if you want something a bit more local and indie.',
      tags: ['cinema', 'film', 'indoor'],
      contact: 'https://thelexicinema.co.uk/TheLexiCinema.dll/Page?p=0&m=m',
      linkLabel: 'See what’s on',
      mapQuery: 'The Lexi Cinema, 194b Chamberlayne Road, London NW10 3JU',
      featured: true
    },
    {
      id: 'act-freud-museum',
      section: 'activities',
      name: 'Freud Museum London',
      age: '8+',
      cost: 'mid',
      area: 'Swiss Cottage',
      blurb: 'A small, interesting museum in Freud’s former home. Better for older children and curious adults than toddlers.',
      recommendation: 'Useful when you need a calmer culture day out.',
      tags: ['museum', 'culture', 'older kids'],
      contact: 'https://www.freud.org.uk/',
      linkLabel: 'Visit Freud Museum',
      mapQuery: 'Freud Museum London, Maresfield Gardens, London'
    },
    {
      id: 'act-west-hampstead-library',
      section: 'activities',
      name: 'West Hampstead Library',
      age: 'all ages',
      cost: 'free',
      area: 'West Hampstead',
      blurb: 'Library with browsing space, public computers, study areas, and local activities on the schedule.',
      recommendation: 'Handy for a low-cost half hour that still feels useful.',
      tags: ['library', 'free', 'quiet'],
      contact: 'https://www.camden.gov.uk/west-hampstead-library',
      linkLabel: 'View library details',
      mapQuery: 'West Hampstead Library, Dennington Park Road, London NW6 1AU'
    },
    {
      id: 'act-swiss-cottage-leisure',
      section: 'activities',
      name: 'Swiss Cottage Leisure Centre',
      age: 'all ages',
      cost: 'mid',
      area: 'Swiss Cottage',
      blurb: 'Big leisure centre with swimming, gym, climbing wall, and classes for different ages.',
      recommendation: 'Strong all-weather option when everyone needs something different.',
      tags: ['swim', 'climbing', 'fitness'],
      contact: 'https://www.better.org.uk/leisure-centre/london/camden/swiss-cottage-leisure-centre/activities',
      linkLabel: 'See activities',
      mapQuery: 'Swiss Cottage Leisure Centre, Adelaide Road, London NW3 3NF',
      featured: true
    },
    {
      id: 'act-paddington-rec-ground',
      section: 'activities',
      name: 'Paddington Recreation Ground',
      age: 'all ages',
      cost: 'free',
      area: 'Maida Vale',
      blurb: 'Large park and sports ground with playground space, courts, and plenty of room for scooters and ball games.',
      recommendation: 'Good for a bigger-energy outing within easy reach.',
      tags: ['park', 'playground', 'sports'],
      contact: 'https://www.everyoneactive.com/centre/paddington-recreation-ground/',
      linkLabel: 'Open centre page',
      mapQuery: 'Paddington Recreation Ground, Carlton Vale, London NW6 5EN'
    },
    {
      id: 'act-vue-finchley-road',
      section: 'activities',
      name: 'Vue Finchley Road',
      age: 'all ages',
      cost: 'mid',
      area: 'Finchley Road',
      blurb: 'Mainstream cinema at the O2 Centre, handy for family films and easy rainy-day plans.',
      recommendation: 'Simple if you want a bigger-screen movie trip.',
      tags: ['cinema', 'film', 'indoor'],
      contact: 'https://www.myvue.com/cinema/finchley-road/whats-on',
      linkLabel: 'Check listings',
      mapQuery: 'Vue Finchley Road, 255 Finchley Road, London'
    },
    {
      id: 'act-st-johns-wood-library',
      section: 'activities',
      name: 'St John’s Wood Library',
      age: 'all ages',
      cost: 'free',
      area: 'St John’s Wood',
      blurb: 'Longer-hours library with study space and regular local use, useful when you need an easy indoor stop.',
      recommendation: 'Worth it if you want a quieter alternative to soft play.',
      tags: ['library', 'free', 'indoor'],
      contact: 'https://www.google.com/search?q=St.+John%27s+Wood+Library',
      linkLabel: 'Search details',
      mapQuery: "St. John's Wood Library, Circus Road, London"
    },
    {
      id: 'act-canal-cafe-theatre',
      section: 'activities',
      name: 'Canal Cafe Theatre',
      age: '8+',
      cost: 'mid',
      area: 'Little Venice',
      blurb: 'Small theatre near Little Venice that works better for older children and grown-up outings.',
      recommendation: 'Good for a culture day when you want something different from the usual family circuit.',
      tags: ['theatre', 'culture', 'older kids'],
      contact: 'https://canalcafetheatre.com/',
      linkLabel: 'See shows',
      mapQuery: 'Canal Cafe Theatre, Westbourne Terrace Road, London'
    },
    {
      id: 'act-pentameters',
      section: 'activities',
      name: "Pentameters Theatre",
      age: '8+',
      cost: 'mid',
      area: 'Hampstead',
      blurb: 'Tiny Hampstead theatre that is better for older children, teens, and low-key evening plans.',
      recommendation: 'Best when you want a small-scale live-show option nearby.',
      tags: ['theatre', 'live show', 'older kids'],
      contact: 'https://www.pentameters.co.uk/',
      linkLabel: 'View programme',
      mapQuery: "Pentameter's theatre, Hampstead, London"
    }
  ]
};

const SECTIONS = ['this-week', 'camps', 'childcare', 'cafes', 'indoor', 'send', 'activities'];
const AGE_ORDER = ['0-2', '2-4', '4-8', '8+', 'all-ages', 'all'];
const COST_ORDER = ['free', 'low', 'mid', 'high', 'varies'];
const ACTIVITY_DEFAULT_IMAGE = './assets/hero.png';
const ACTIVITY_TYPE_ORDER = [
  'parks & outdoors',
  'playgroups & toddlers',
  'swim & lessons',
  'classes & clubs',
  'nature & forest school',
  'museums & culture',
  'libraries',
  'leisure & sport',
  'cinema & theatre'
];
const ACTIVITY_TYPE_LABELS = {
  'parks & outdoors': 'Parks & outdoors',
  'playgroups & toddlers': 'Playgroups & toddlers',
  'swim & lessons': 'Swim & lessons',
  'classes & clubs': 'Classes & clubs',
  'nature & forest school': 'Nature & forest school',
  'museums & culture': 'Museums & culture',
  libraries: 'Libraries',
  'leisure & sport': 'Leisure & sport',
  'cinema & theatre': 'Cinema & theatre'
};
const ACTIVITY_TYPE_DESCRIPTIONS = {
  'parks & outdoors': 'Good for fresh air, movement, scooters, and low-cost reset days.',
  'playgroups & toddlers': 'Gentle options for little ones, music, and parent-friendly routines.',
  'swim & lessons': 'Useful when you want structured lessons or water-based energy burn.',
  'classes & clubs': 'Weekly sessions with a regular rhythm and repeat visits.',
  'nature & forest school': 'Outdoor, muddy, hands-on play with a stronger nature feel.',
  'museums & culture': 'Calmer indoor ideas for a slower pace and a bit of learning.',
  libraries: 'Free, quiet indoor stops with space to browse, read, or catch your breath.',
  'leisure & sport': 'Bigger all-weather venues with sport, climbing, swimming, or mixed activity.',
  'cinema & theatre': 'Screen and stage outings for rainy days or older children.'
};
const ACTIVITY_TYPE_ICONS = {
  'parks & outdoors': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l3 5h-2l3 4h-2l2 4H8l2-4H8l3-4H9z"/><path d="M12 17v4"/><path d="M5 21h14"/></svg>',
  'playgroups & toddlers': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="9" width="7" height="7" rx="1.5"/><rect x="13" y="6" width="7" height="7" rx="1.5"/><circle cx="7.5" cy="12.5" r="1"/><circle cx="16.5" cy="9.5" r="1"/><path d="M8 16v2"/><path d="M17 13v3"/><path d="M5 21h14"/></svg>',
  'swim & lessons': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8.5" cy="7" r="1.8"/><path d="M10 9.5c1.2 0 2.3.7 3.2 1.8l2.8 3.7"/><path d="M9.2 11.2l-2.1 2.2"/><path d="M6 17c1.3-1 2.7-1.5 4-1.5s2.7.5 4 1.5 2.7 1.5 4 1.5"/><path d="M4 20c1.3-1 2.7-1.5 4-1.5s2.7.5 4 1.5 2.7 1.5 4 1.5"/></svg>',
  'classes & clubs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M8 9h8"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
  'nature & forest school': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c2 2.5 3 4.4 3 6a3 3 0 11-6 0c0-1.6 1-3.5 3-6z"/><path d="M12 11v10"/><path d="M8 15c0 2.5 1.8 4 4 4s4-1.5 4-4"/></svg>',
  'museums & culture': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-5 9 5"/><path d="M5 9v10"/><path d="M9 9v10"/><path d="M15 9v10"/><path d="M19 9v10"/><path d="M3 19h18"/></svg>',
  libraries: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6c3-1.5 6-1.5 8 0v12c-2-1.5-5-1.5-8 0z"/><path d="M20 6c-3-1.5-6-1.5-8 0v12c2-1.5 5-1.5 8 0z"/><path d="M12 6v12"/><path d="M4 6h8"/><path d="M12 6h8"/></svg>',
  'leisure & sport': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 13h16"/><path d="M6 13c0-4 2.7-7 6-7s6 3 6 7"/><circle cx="12" cy="13" r="2.3"/><path d="M7 20c1.2-2 2.9-3 5-3s3.8 1 5 3"/></svg>',
  'cinema & theatre': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 6l-2 4"/><path d="M12 6l-2 4"/><path d="M16 6l-2 4"/><path d="M8 18v-4"/><path d="M16 18v-4"/><path d="M4 10h16"/></svg>'
};
const CAMP_TYPE_ORDER = [
  'tennis & racket sports',
  'performing arts',
  'dance & movement',
  'sports & active',
  'gymnastics & circus',
  'multi-activity',
  'stem & science',
  'forest school & outdoors',
  'creative clubs',
  'early years play schemes',
  'funded & free places'
];
const CAMP_TYPE_LABELS = {
  'tennis & racket sports': 'Tennis & racket sports',
  'performing arts': 'Performing arts',
  'dance & movement': 'Dance & movement',
  'sports & active': 'Sports & active',
  'gymnastics & circus': 'Gymnastics & circus',
  'multi-activity': 'Multi-activity',
  'stem & science': 'STEM & science',
  'forest school & outdoors': 'Forest school & outdoors',
  'creative clubs': 'Creative clubs',
  'early years play schemes': 'Early years play schemes',
  'funded & free places': 'Funded & free places'
};
const CAMP_TYPE_DESCRIPTIONS = {
  'tennis & racket sports': 'Focused racket-sport camps for children who want coaching, drills, and a clear skill focus.',
  'performing arts': 'Theatre, music, singing, and performance-led camps with a creative feel.',
  'dance & movement': 'Dance-heavy camps with movement, routines, and expressive play.',
  'sports & active': 'High-energy camps built around sport, games, and active childcare hours.',
  'gymnastics & circus': 'Coaching-led sessions with gymnastics, circus skills, and plenty of movement.',
  'multi-activity': 'Broad-appeal camps with a mix of games, sport, crafts, and group activities.',
  'stem & science': 'Science, experiments, and hands-on learning for children who like to make and test things.',
  'forest school & outdoors': 'Outdoor, nature-led camps with fresh air, mud, and hands-on exploring.',
  'creative clubs': 'Smaller creative camps with art, making, building, and playful sessions.',
  'early years play schemes': 'Gentler holiday care for younger children with shorter, playful days.',
  'funded & free places': 'Free or subsidised holiday places for eligible families.'
};
const CAMP_TYPE_ICONS = {
  'tennis & racket sports': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 13.5l6-6"/><path d="M6.5 15.5l2-2"/><path d="M13.5 8.5l2-2"/><path d="M11 16c2.2-2.2 3.8-5 3.8-7.6 0-1.5-.5-2.8-1.4-3.8-1-1-2.3-1.4-3.8-1.4-2.6 0-5.4 1.6-7.6 3.8-2.2 2.2-3.8 5-3.8 7.6 0 1.5.5 2.8 1.4 3.8 1 1 2.3 1.4 3.8 1.4 2.6 0 5.4-1.6 7.6-3.8Z" transform="translate(4 4) scale(.8) translate(-4 -4)"/><circle cx="17.5" cy="17.5" r="1.8"/></svg>',
  'performing arts': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6c3 0 5 2 5 5s-2 5-5 5"/><path d="M20 6c-3 0-5 2-5 5s2 5 5 5"/><path d="M9 11c1-1 2.2-1.5 3-1.5s2 .5 3 1.5"/><path d="M8 16c1.2 1.5 2.6 2 4 2s2.8-.5 4-2"/></svg>',
  'dance & movement': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="5" r="2"/><path d="M10 7.5v4l-2.5 3.5"/><path d="M10 11l3 2.5"/><path d="M7.5 15l4.5 1"/><path d="M12 7.5l3 2"/><path d="M14 10l2.5-4"/><path d="M5 20c1.5-3 3.2-4.5 5-4.5S13.5 17 15 20"/></svg>',
  'sports & active': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 13h16"/><path d="M6 13c0-4 2.7-7 6-7s6 3 6 7"/><circle cx="12" cy="13" r="2.3"/><path d="M7 20c1.2-2 2.9-3 5-3s3.8 1 5 3"/></svg>',
  'gymnastics & circus': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="1.8"/><path d="M12 7v4"/><path d="M12 11l-4 5"/><path d="M12 11l4 5"/><path d="M8 16l-2 4"/><path d="M16 16l2 4"/><path d="M6 20h12"/><path d="M9 9c1.2 1 2.7 1.5 3 1.5s1.8-.5 3-1.5"/></svg>',
  'multi-activity': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/><path d="M10 7h4"/><path d="M7 10v4"/><path d="M14 10v4"/><path d="M10 17h4"/></svg>',
  'stem & science': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6"/><path d="M10 3v5l-4.5 8A3 3 0 008.1 20h7.8a3 3 0 002.6-4.5L14 8V3"/><path d="M8.5 14h7"/><path d="M7.5 17h9"/><path d="M10.5 8h3"/></svg>',
  'forest school & outdoors': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l3 5h-2l3 5h-2l3 5H7l3-5H8l3-5H9z"/><path d="M12 18v3"/><path d="M5 21h14"/></svg>',
  'creative clubs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15c3.5-7 10-9.5 16-10"/><path d="M8 19c2.5 0 4-1.5 4-4 0-1.3-.6-2.3-1.5-3.2"/><path d="M12 12l5-5"/><path d="M16 7l1.5-1.5"/><path d="M7 17l3 3"/></svg>',
  'early years play schemes': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 11a5 5 0 0110 0v5H7z"/><path d="M8 16v2"/><path d="M16 16v2"/><path d="M6 21h12"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/></svg>',
  'funded & free places': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9h6a2 2 0 010 4H11a2 2 0 000 4h6"/><path d="M12 7v10"/></svg>'
};
const STORAGE_KEY = 'willesden-shortlist-v1';
const LS = {
  shortlist: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
};
let currentMapItemId = null;
let currentFilteredGroups = null;
let mapInstance = null;
let mapMarkerLayer = null;
let mapMarkersById = new Map();
const STATIC_MAP_COORDS = window.WF_MAP_COORDS || {};
const WILLESDEN_CENTER = { lat: 51.5493524, lng: -0.222223 };
const MAX_MAP_DISTANCE_MILES = 3;
const LOCAL_ONLY_BLOCKLIST = new Set(['child-monkey-puzzle', 'child-bright-horizons', 'child-beckford-nursery']);
const GEOCODE_CACHE_KEY = 'willesden-map-geocodes-v1';
let geoCache = (() => {
  try {
    return JSON.parse(localStorage.getItem(GEOCODE_CACHE_KEY) || '{}');
  } catch {
    return {};
  }
})();

const ICONS = {
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  pound: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  tag: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  map: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/></svg>',
  calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
  save: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>'
};

function costRank(cost) {
  if (!cost) return 99;
  return COST_ORDER.indexOf(cost) === -1 ? 99 : COST_ORDER.indexOf(cost);
}

function ageMatches(itemAge, filter) {
  if (filter === 'all' || !filter) return true;
  const age = (itemAge || '').toLowerCase();
  if (filter === 'all-ages') return age.includes('all ages') || age.includes('all age') || age.includes('all');
  if (filter === '0-2') return /0|1|2|months|babies|toddlers?/.test(age);
  if (filter === '2-4') return /2|3|4/.test(age) || age.includes('toddl');
  if (filter === '4-8') return /4|5|6|7|8/.test(age);
  if (filter === '8+') return /8|9|10|11|12|13|14|15|16|17|18/.test(age);
  return true;
}

function costMatches(cost, filter) {
  if (!filter || filter === 'all') return true;
  if (filter === 'free') return cost === 'free';
  if (filter === 'low') return cost === 'low';
  if (filter === 'mid') return cost === 'mid' || cost === 'varies';
  if (filter === 'high') return cost === 'high';
  return true;
}

function cardMatches(item, query, sectionFilter, ageFilter, costFilter, shortlistOnly) {
  if (LOCAL_ONLY_BLOCKLIST.has(item.id)) return false;
  const staticCoords = STATIC_MAP_COORDS[item.id];
  if (staticCoords && !isWithinWillesden(item, staticCoords)) return false;
  const haystack = [item.name, item.area, item.blurb, item.recommendation, item.age, item.cost, ...(item.tags || [])].join(' ').toLowerCase();
  const searchOk = !query || haystack.includes(query);
  const sectionOk = sectionFilter === 'all' || item.section === sectionFilter;
  const ageOk = ageMatches(item.age, ageFilter);
  const costOk = costMatches(item.cost, costFilter);
  const shortlistOk = !shortlistOnly || LS.shortlist.has(item.id);
  return searchOk && sectionOk && ageOk && costOk && shortlistOk;
}

function badgeForCost(cost) {
  const map = {
    free: 'Free',
    low: 'Low cost',
    mid: 'Mid cost',
    high: 'Higher cost',
    varies: 'Varies'
  };
  return map[cost] || cost;
}

function normalizeHost(value) {
  if (!value) return '';
  try {
    const url = new URL(value, window.location.href);
    if (!/^https?:$/.test(url.protocol)) return '';
    const host = url.hostname.replace(/^www\./, '');
    if (/google\./.test(host) && /\/search\b/.test(url.pathname)) return '';
    return host;
  } catch {
    return '';
  }
}

function resolveExplicitLogo(url, baseUrl) {
  if (!url || String(url).includes('*')) return '';
  try {
    return new URL(url, baseUrl).href;
  } catch {
    return '';
  }
}

function logoUrlForItem(item) {
  const explicit = resolveExplicitLogo((window.WF_LOGOS && (window.WF_LOGOS[item.id] || window.WF_LOGOS[item.name])) || item.logo || item.logoUrl, item.website || item.contact || item.link || window.location.href);
  if (explicit) return explicit;
  const source = item.website || item.contact || item.link || '';
  const host = normalizeHost(source);
  if (!host) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
}

function initialsForName(name) {
  const parts = String(name || '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);
  const pick = parts.slice(0, 2).map(part => part[0]).join('');
  return (pick || 'WF').toUpperCase();
}

function renderBrandMark(item) {
  const logo = logoUrlForItem(item);
  const initials = initialsForName(item.name);
  return `
    <div class="item-brandmark ${logo ? '' : 'brandmark-fallback'}" aria-hidden="true">
      ${logo ? `<img class="item-brandmark-img" src="${escapeAttr(logo)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.item-brandmark').classList.add('brandmark-fallback');this.remove();">` : ''}
      <span class="item-brandmark-fallback-text">${escapeHtml(initials)}</span>
    </div>
  `;
}

function formatSectionLabel(section) {
  return {
    'this-week': 'This week',
    childcare: 'Childcare',
    cafes: 'Cafés',
    indoor: 'Indoor',
    send: 'SEND',
    activities: 'Activities'
  }[section] || section;
}

function activityTypeForItem(item) {
  const text = [item.name, item.blurb, item.recommendation, ...(item.tags || [])].join(' ').toLowerCase();
  if (/swim|swimming|lesson/.test(text)) return 'swim & lessons';
  if (/museum|heritage|culture|freud/.test(text)) return 'museums & culture';
  if (/library|books|reading/.test(text)) return 'libraries';
  if (/cinema|theatre|film|screen/.test(text)) return 'cinema & theatre';
  if (/class|club|weekly|capoeira|dance|gymnastics|football|arts and crafts|music/.test(text)) return 'classes & clubs';
  if (/stay and play|playgroup|toddler|baby|rhym/.test(text)) return 'playgroups & toddlers';
  if (/leisure centre|fitness|climb|sports centre/.test(text)) return 'leisure & sport';
  if (/forest school|garden|outdoors|park|playground|dell|recreation ground/.test(text)) return 'parks & outdoors';
  return 'classes & clubs';
}

function activityTypeLabel(type) {
  return ACTIVITY_TYPE_LABELS[type] || type;
}

function activityTypeDescription(type) {
  return ACTIVITY_TYPE_DESCRIPTIONS[type] || '';
}

function activityImageForGroup(items) {
  const specific = items.find(item => item.promoImage && item.promoImage !== ACTIVITY_DEFAULT_IMAGE);
  return (specific && specific.promoImage) || ACTIVITY_DEFAULT_IMAGE;
}

function activityTypeIcon(type) {
  return ACTIVITY_TYPE_ICONS[type] || '⭐';
}

function slugifyType(type) {
  return String(type || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function renderActivityGroups(items) {
  const grouped = new Map();
  items.forEach(item => {
    const type = activityTypeForItem(item);
    if (!grouped.has(type)) grouped.set(type, []);
    grouped.get(type).push(item);
  });

  const orderedTypes = [
    ...ACTIVITY_TYPE_ORDER.filter(type => grouped.has(type)),
    ...[...grouped.keys()].filter(type => !ACTIVITY_TYPE_ORDER.includes(type)).sort()
  ];

  return orderedTypes.map(type => {
    const groupItems = grouped.get(type) || [];
    const image = activityImageForGroup(groupItems);
    return `
      <section class="activity-group" data-activity-type="${escapeAttr(type)}">
        <div class="activity-group-header">
          <div class="activity-group-copy">
            <div class="parent-card-kicker">Activity type</div>
            <h3>${escapeHtml(activityTypeLabel(type))}</h3>
            <p>${escapeHtml(activityTypeDescription(type))}</p>
          </div>
          <div class="activity-group-image-wrap">
            <div class="activity-group-icon-badge" aria-hidden="true">${activityTypeIcon(type)}</div>
            <img class="activity-group-image" src="${escapeAttr(image)}" alt="${escapeAttr(activityTypeLabel(type))} image" loading="lazy">
          </div>
        </div>
        <div class="parent-grid activity-group-grid">
          ${groupItems.map(renderCard).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function campTypeForItem(item) {
  const text = [item.name, item.blurb, item.recommendation, ...(item.tags || [])].join(' ').toLowerCase();
  if (/tennis|racket|racquet/.test(text)) return 'tennis & racket sports';
  if (/dance|movement|ballet|showcase/.test(text)) return 'dance & movement';
  if (/performing arts|theatre|theater|singing|music|drama|performance/.test(text) && !/multi-activity|multi activity|club excel|holiday hq|breezy club|apf|junior adventures group/.test(text)) return 'performing arts';
  if (/gymnastics|circus/.test(text)) return 'gymnastics & circus';
  if (/play scheme|early years|2½|2-|3–|3-/.test(text)) return 'early years play schemes';
  if (/stem|steam|science|experiment|science camp/.test(text)) return 'stem & science';
  if (/forest school|outdoors|outdoor|nature|mud|garden|dell|woodland/.test(text)) return 'forest school & outdoors';
  if (/multi-activity|multi activity|club excel|holiday hq|breezy club|apf|junior adventures group/.test(text)) return 'multi-activity';
  if (/sports centre|sport|football|basketball|archery|active play|active childcare|athletic|games/.test(text)) return 'sports & active';
  if (/creative|arts and crafts|craft|making|art/.test(text)) return 'creative clubs';
  if (/haf|free|eligible|subsidi/.test(text)) return 'funded & free places';
  return 'multi-activity';
}

function campTypeLabel(type) {
  return CAMP_TYPE_LABELS[type] || type;
}

function campTypeDescription(type) {
  return CAMP_TYPE_DESCRIPTIONS[type] || '';
}

function campTypeIcon(type) {
  return CAMP_TYPE_ICONS[type] || '⭐';
}

function renderCampGroups(items) {
  const grouped = new Map();
  items.forEach(item => {
    const type = campTypeForItem(item);
    if (!grouped.has(type)) grouped.set(type, []);
    grouped.get(type).push(item);
  });

  const orderedTypes = [
    ...CAMP_TYPE_ORDER.filter(type => grouped.has(type)),
    ...[...grouped.keys()].filter(type => !CAMP_TYPE_ORDER.includes(type)).sort()
  ];

  const nav = orderedTypes.length > 1 ? `
    <nav class="camp-group-nav" aria-label="Jump to camp types">
      ${orderedTypes.map(type => `<a class="group-nav-pill" href="#camp-group-${slugifyType(type)}"><span class="group-nav-icon">${campTypeIcon(type)}</span><span>${escapeHtml(campTypeLabel(type))}</span></a>`).join('')}
    </nav>
  ` : '';

  return `${nav}${orderedTypes.map(type => {
    const groupItems = grouped.get(type) || [];
    return `
      <section class="camp-group" id="camp-group-${slugifyType(type)}" data-camp-type="${escapeAttr(type)}">
        <div class="camp-group-header">
          <div class="camp-group-copy">
            <div class="parent-card-kicker">Camp type</div>
            <h3>${escapeHtml(campTypeLabel(type))}</h3>
            <p>${escapeHtml(campTypeDescription(type))}</p>
          </div>
          <div class="camp-group-icon-wrap" aria-hidden="true">
            <div class="camp-group-icon">${campTypeIcon(type)}</div>
            <div class="camp-group-count">${groupItems.length} camp${groupItems.length === 1 ? '' : 's'}</div>
          </div>
        </div>
        <div class="parent-grid camp-group-grid">
          ${groupItems.map(renderCard).join('')}
        </div>
      </section>
    `;
  }).join('')}`;
}

function renderCard(item) {
  const isSaved = LS.shortlist.has(item.id);
  const contactUrl = item.contact || item.link || '#';
  const hasLink = contactUrl && contactUrl !== '#';
  const bookLabel = /mail|tel:|book|visit|learn|open|browse|search|see|view/i.test(item.linkLabel || '') ? item.linkLabel : 'Open link';
  const mapQuery = item.mapQuery || item.name;
  const promoImage = item.section === 'activities' ? (item.promoImage || ACTIVITY_DEFAULT_IMAGE) : item.promoImage;
  const campType = item.section === 'camps' ? campTypeForItem(item) : '';

  const tags = (item.tags || []).slice(0, 4).map(tag => `<span class="mini-pill">${tag}</span>`).join('');

  return `
    <article class="parent-card ${item.cardTone || ''}" data-item="${item.id}" data-section="${item.section}" data-age="${item.age}" data-cost="${item.cost}" data-search="${escapeHtml([item.name, item.area, item.blurb, item.recommendation, item.age, item.cost, ...(item.tags || [])].join(' ')).toLowerCase()}"${item.section === 'activities' ? ` data-activity-type="${escapeAttr(activityTypeForItem(item))}"` : ''}${item.section === 'camps' ? ` data-camp-type="${escapeAttr(campType)}"` : ''}>
      <div class="parent-card-top">
        <div class="parent-card-title-wrap">
          ${renderBrandMark(item)}
          <div class="parent-card-kicker">${formatSectionLabel(item.section)}</div>
          <h3>${escapeHtml(item.name)}</h3>
          ${campType ? `<div class="camp-type-chip"><span class="camp-type-chip-icon">${campTypeIcon(campType)}</span><span>${escapeHtml(campTypeLabel(campType))}</span></div>` : ''}
        </div>
        <button class="save-btn ${isSaved ? 'saved' : ''}" data-action="save" data-id="${item.id}" aria-pressed="${isSaved ? 'true' : 'false'}" aria-label="${isSaved ? 'Remove from shortlist' : 'Save to shortlist'}">
          ${ICONS.save}
        </button>
      </div>
      ${promoImage && item.section !== 'activities' ? `
      <a class="parent-card-promo" href="${escapeAttr(contactUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(item.promoAlt || item.name)}">
        <img src="${escapeAttr(promoImage)}" alt="${escapeAttr(item.promoAlt || item.name)}" loading="lazy">
      </a>
      ` : ''}
      <div class="badge-row">
        <span class="badge">${ICONS.users} ${escapeHtml(item.age)}</span>
        <span class="badge">${ICONS.pound} ${badgeForCost(item.cost)}</span>
        <span class="badge">${ICONS.pin} ${escapeHtml(item.area)}</span>
      </div>
      <p class="parent-card-copy">${escapeHtml(item.blurb)}</p>
      <p class="parent-card-reco"><strong>Why parents like it:</strong> ${escapeHtml(item.recommendation)}</p>
      <div class="mini-pill-row">${tags}</div>
      <div class="card-actions">
        ${hasLink ? `<a class="card-action primary" href="${escapeAttr(contactUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkLabel || 'Open')} ${ICONS.arrow}</a>` : ''}
        <button class="card-action" data-action="map" data-id="${item.id}">${ICONS.map} Map</button>
        <button class="card-action" data-action="export" data-id="${item.id}">${ICONS.calendar} Export</button>
      </div>
      <div class="card-footnote">
        <span>${item.featured ? 'Featured this week' : 'Saved locally if you want it'}</span>
        <button class="text-button" data-action="details" data-id="${item.id}">Open in shortlist</button>
      </div>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('`', '&#96;');
}

function renderSection(sectionId, items) {
  const grid = document.getElementById(`${sectionId}-grid`);
  const count = document.getElementById(`count-${sectionId}`);
  if (!grid) return;
  if (sectionId === 'activities') {
    grid.innerHTML = renderActivityGroups(items);
  } else if (sectionId === 'camps') {
    grid.innerHTML = renderCampGroups(items);
  } else {
    grid.innerHTML = items.map(renderCard).join('');
  }
  if (count) count.textContent = items.length;
}

function getFilteredItems() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const sectionFilter = document.querySelector('[data-section-filter].active')?.dataset.sectionFilter || 'all';
  const ageFilter = document.querySelector('[data-age-filter].active')?.dataset.ageFilter || 'all';
  const costFilter = document.querySelector('[data-cost-filter].active')?.dataset.costFilter || 'all';
  const shortlistOnly = document.querySelector('[data-shortlist-only]')?.classList.contains('active') || false;

  return Object.fromEntries(
    Object.entries(DATA).map(([key, items]) => [
      key,
      items.filter(item => cardMatches(item, query, sectionFilter, ageFilter, costFilter, shortlistOnly))
    ])
  );
}

function renderAll() {
  const filtered = getFilteredItems();
  currentFilteredGroups = filtered;
  SECTIONS.forEach(section => renderSection(section, filtered[section] || []));
  updateSectionVisibility(filtered);
  updateMap(filtered);
  renderShortlist();
  updateStats();
}

function updateSectionVisibility(filtered) {
  SECTIONS.forEach(section => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    const grid = sectionEl.querySelector('.parent-grid');
    const hasCards = filtered[section] && filtered[section].length > 0;
    sectionEl.style.display = hasCards ? '' : 'none';
    if (grid) grid.dataset.empty = hasCards ? 'false' : 'true';
  });
}

function updateStats() {
  const total = Object.values(DATA).flat().length;
  const freeLow = Object.values(DATA).flat().filter(item => item.cost === 'free' || item.cost === 'low').length;
  const saved = LS.shortlist.size;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-free').textContent = freeLow;
  document.getElementById('stat-shortlist').textContent = saved;
  document.getElementById('stat-updated').textContent = formatDate(LIVE_UPDATES.updatedAt || new Date().toISOString().slice(0, 10));
  document.getElementById('latest-check').textContent = formatDate(LIVE_UPDATES.updatedAt || new Date().toISOString().slice(0, 10));
  document.getElementById('next-check').textContent = formatDate(LIVE_UPDATES.nextCheck || new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10));
  document.getElementById('count-map').textContent = Object.values(DATA).flat().length;
  const banner = document.getElementById('live-update-banner');
  if (banner) {
    banner.hidden = false;
    banner.innerHTML = `
      <strong>${escapeHtml(LIVE_UPDATES.headline || 'Latest search update')}</strong>
      <span>Updated ${formatDate(LIVE_UPDATES.updatedAt || '')}. Next search ${formatDate(LIVE_UPDATES.nextCheck || '')}.</span>
    `;
  }
  document.getElementById('count-this-week').textContent = DATA.thisWeek.length;
}

function formatDate(value) {
  if (!value) return '—';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function renderShortlist() {
  const grid = document.getElementById('shortlist-grid');
  const empty = document.getElementById('shortlist-empty');
  const selected = Object.values(DATA).flat().filter(item => LS.shortlist.has(item.id));
  grid.innerHTML = selected.map(item => `
    <article class="shortlist-item">
      <h3>${escapeHtml(item.name)}</h3>
      <div class="shortlist-meta">${escapeHtml(item.area)} · ${escapeHtml(item.age)} · ${badgeForCost(item.cost)}</div>
      <p>${escapeHtml(item.recommendation)}</p>
      <div class="card-actions compact">
        <button class="card-action" data-action="map" data-id="${item.id}">${ICONS.map} Map</button>
        <button class="card-action" data-action="export" data-id="${item.id}">${ICONS.calendar} Export</button>
        <button class="card-action" data-action="save" data-id="${item.id}">${ICONS.heart} Unsave</button>
      </div>
    </article>
  `).join('');
  empty.hidden = selected.length > 0;
}

function mapQueryForItem(item) {
  return item.mapQuery || item.area || item.name || '';
}

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function distanceMiles(a, b) {
  const toRad = deg => (deg * Math.PI) / 180;
  const R = 3958.7613;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function isWithinWillesden(item, coords) {
  if (!coords || !Number.isFinite(coords.lat) || !Number.isFinite(coords.lng)) return false;
  return distanceMiles(WILLESDEN_CENTER, coords) <= MAX_MAP_DISTANCE_MILES;
}

function formatMapPopup(item) {
  const query = mapQueryForItem(item);
  return `
    <div style="display:grid;gap:0.35rem;min-width:180px;max-width:240px;">
      <strong style="font-family:var(--font-display);">${escapeHtml(item.name)}</strong>
      <span style="color:var(--color-text-muted);font-size:0.9rem;">${escapeHtml(item.area || item.age || '')}</span>
      <a href="${escapeAttr(mapsSearchUrl(query))}" target="_blank" rel="noopener noreferrer">Open in Maps</a>
      ${item.contact ? `<a href="${escapeAttr(item.contact)}" target="_blank" rel="noopener noreferrer">Open link</a>` : ''}
    </div>
  `;
}

function persistGeoCache() {
  localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(geoCache));
}

async function geocodeMapItem(item) {
  const query = mapQueryForItem(item).trim();
  if (!query) return null;
  const staticCoords = STATIC_MAP_COORDS[item.id];
  if (staticCoords && isWithinWillesden(item, staticCoords)) return staticCoords;
  const cacheKey = query.toLowerCase();
  if (geoCache[cacheKey] && isWithinWillesden(item, geoCache[cacheKey])) return geoCache[cacheKey];
  if (geoCache[cacheKey]) delete geoCache[cacheKey];
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`, {
      headers: { Accept: 'application/json' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) return null;
    const hit = data[0];
    const coords = {
      lat: Number(hit.lat),
      lng: Number(hit.lon),
      label: hit.display_name || query
    };
    if (Number.isFinite(coords.lat) && Number.isFinite(coords.lng) && isWithinWillesden(item, coords)) {
      geoCache[cacheKey] = coords;
      persistGeoCache();
      return coords;
    }
  } catch (error) {
    return null;
  }
  return null;
}

function ensureMap() {
  if (!window.L) return null;
  if (!mapInstance) {
    mapInstance = L.map('map-frame', {
      zoomControl: true,
      scrollWheelZoom: false,
      tap: false
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance);
    mapMarkerLayer = L.layerGroup().addTo(mapInstance);
    mapInstance.setView([51.542, -0.223], 12);
  }
  return mapInstance;
}

async function updateMap(filtered) {
  const mapList = document.getElementById('map-list');
  const mapPanel = document.getElementById('map-panel');
  const mapFrame = document.getElementById('map-frame');
  const combined = Object.values(filtered).flat();
  const mapCandidates = combined.filter(item => item.mapQuery || item.area).slice(0, 30);
  const geocoded = await Promise.all(mapCandidates.map(async item => ({ item, coords: await geocodeMapItem(item) })));
  const localEntries = geocoded.filter(({ coords }) => coords && isWithinWillesden(null, coords));
  const selected = localEntries.find(entry => entry.item.id === currentMapItemId) || localEntries[0] || null;
  if (!selected) {
    mapList.innerHTML = '<div class="map-fallback-message">No local map entries within 3 miles right now.</div>';
    mapPanel.innerHTML = '<strong>No local map entries</strong><span>Try a different filter.</span>';
    if (mapFrame) mapFrame.innerHTML = '';
    return;
  }

  mapList.innerHTML = localEntries.map(({ item }) => `
    <button class="map-list-item${item.id === selected.item.id ? ' active' : ''}" data-action="map" data-id="${item.id}">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${escapeHtml(item.area)} · ${escapeHtml(item.age)}</span>
    </button>
  `).join('');
  mapPanel.innerHTML = `
    <strong>${escapeHtml(selected.item.name)}</strong>
    <span>${escapeHtml(selected.item.blurb)}</span>
    <div class="map-panel-links">
      <a href="${escapeAttr(mapsSearchUrl(mapQueryForItem(selected.item)))}" target="_blank" rel="noopener noreferrer">Open in Maps</a>
      ${selected.item.contact ? `<a href="${escapeAttr(selected.item.contact)}" target="_blank" rel="noopener noreferrer">Open link</a>` : ''}
    </div>
  `;

  const map = ensureMap();
  if (!map || !mapMarkerLayer) {
    mapFrame.innerHTML = '<div class="map-fallback-message">Map loading failed. Use the links beside it instead.</div>';
    return;
  }

  mapMarkerLayer.clearLayers();
  mapMarkersById.clear();

  const bounds = [];
  localEntries.forEach(({ item, coords }) => {
    const marker = L.marker([coords.lat, coords.lng]);
    marker.addTo(mapMarkerLayer);
    marker.bindPopup(formatMapPopup(item));
    marker.on('click', () => {
      currentMapItemId = item.id;
      mapPanel.innerHTML = `
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.blurb)}</span>
        <div class="map-panel-links">
          <a href="${escapeAttr(mapsSearchUrl(mapQueryForItem(item)))}" target="_blank" rel="noopener noreferrer">Open in Maps</a>
          ${item.contact ? `<a href="${escapeAttr(item.contact)}" target="_blank" rel="noopener noreferrer">Open link</a>` : ''}
        </div>
      `;
    });
    mapMarkersById.set(item.id, marker);
    bounds.push([coords.lat, coords.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  } else {
    map.setView([WILLESDEN_CENTER.lat, WILLESDEN_CENTER.lng], 13);
  }

  const selectedMarker = mapMarkersById.get(selected.item.id);
  if (selectedMarker) {
    selectedMarker.openPopup();
  }
}

function syncFilters(button) {
  const group = button.closest('.filter-pills');
  if (!group) return;
  group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  button.classList.add('active');
  renderAll();
}

function toggleShortlist(id) {
  if (LS.shortlist.has(id)) {
    LS.shortlist.delete(id);
  } else {
    LS.shortlist.add(id);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(LS.shortlist)));
  renderAll();
}

function itemById(id) {
  return Object.values(DATA).flat().find(item => item.id === id);
}

function exportCalendarForItems(items) {
  const dateBase = new Date();
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Willesden Families//EN'
  ];
  items.forEach((item, index) => {
    const dt = new Date(dateBase);
    dt.setDate(dt.getDate() + index);
    const stamp = dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const day = dt.toISOString().slice(0, 10).replaceAll('-', '');
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${item.id}-${index}@willesden-families`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART;VALUE=DATE:${day}`);
    lines.push(`SUMMARY:${item.name}`);
    lines.push(`DESCRIPTION:${(item.blurb + ' ' + item.recommendation + ' ' + (item.contact || '')).replace(/\n/g, ' ')}`);
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'willesden-families-shortlist.ics';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function bindControls() {
  document.getElementById('search-input').addEventListener('input', renderAll);
  document.querySelectorAll('[data-section-filter], [data-age-filter], [data-cost-filter]').forEach(btn => {
    btn.addEventListener('click', () => syncFilters(btn));
  });
  const shortlistToggle = document.querySelector('[data-shortlist-only]');
  shortlistToggle.addEventListener('click', () => {
    shortlistToggle.classList.toggle('active');
    shortlistToggle.setAttribute('aria-pressed', shortlistToggle.classList.contains('active') ? 'true' : 'false');
    renderAll();
  });

  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const id = button.dataset.id;
    const action = button.dataset.action;
    const item = itemById(id);
    if (!item) return;

    if (action === 'save') {
      toggleShortlist(id);
      return;
    }

    if (action === 'map') {
      selectMapItem(id);
      return;
    }

    if (action === 'export') {
      exportCalendarForItems([item]);
      return;
    }

    if (action === 'details') {
      toggleShortlist(id);
    }
  });

  document.getElementById('export-calendar-btn').addEventListener('click', () => {
    const selected = Object.values(DATA).flat().filter(item => LS.shortlist.has(item.id));
    if (!selected.length) return;
    exportCalendarForItems(selected);
  });

  document.getElementById('clear-shortlist-btn').addEventListener('click', () => {
    LS.shortlist.clear();
    localStorage.setItem(STORAGE_KEY, '[]');
    renderAll();
  });
}

function selectMapItem(id) {
  const item = itemById(id);
  if (!item) return;
  currentMapItemId = id;
  const filtered = currentFilteredGroups || getFilteredItems();
  updateMap(filtered);
}

function applyTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  const stored = localStorage.getItem('willesden-theme');
  const initial = stored || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
  toggle.setAttribute('aria-label', `Switch to ${initial === 'dark' ? 'light' : 'dark'} mode`);
  toggle.innerHTML = initial === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('willesden-theme', next);
    toggle.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
    toggle.innerHTML = next === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
}

function applyHeaderShadow() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function bootstrap() {
  applyTheme();
  applyHeaderShadow();
  initReveal();
  bindControls();
  renderAll();
  const firstMapItem = Object.values(DATA).flat().find(Boolean);
  if (firstMapItem) selectMapItem(firstMapItem.id);
}

bootstrap();
