const LIVE_UPDATES = window.WF_LIVE_UPDATES || {
  updatedAt: '2026-05-18',
  nextCheck: '2026-05-25',
  headline: 'Fresh local picks for parents in Willesden Green and nearby NW London',
  items: []
};

const DATA = {
  thisWeek: [
    // ===== CLOSE TO HOME (local NW London) =====
    {
      id: 'event-ouryard-kids-garden-club',
      section: 'this-week',
      name: 'Kids Garden Club at Clitterhouse Farm',
      age: 'all ages',
      cost: 'free',
      area: 'Brent Cross',
      eventDate: 'Fri 10 Jul',
      eventTime: '16:00',
      blurb: 'Weekly gardening club for kids at Our Yard, the community-run creative and sustainable hub at historic Clitterhouse Farm. Get hands-on with planting, growing, and nature.',
      recommendation: 'Brilliant free outdoor activity — kids learn about nature and food growing in a relaxed community setting.',
      tags: ['gardening', 'nature', 'outdoor', 'community', 'free'],
      contact: 'https://www.ouryard.org/events',
      linkLabel: 'Our Yard events',
      mapQuery: 'Clitterhouse Farm, Claremont Road, London NW2',
      promoImage: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'local',
      cardTone: 'weekly'
    },
    {
      id: 'event-ouryard-little-critters',
      section: 'this-week',
      name: 'Little Critters Stay \'n\' Play',
      age: '0–5',
      cost: 'free',
      area: 'Brent Cross',
      eventDate: 'Fridays (term time)',
      eventTime: '10:00',
      blurb: 'Drop-in stay and play session for under-5s at Our Yard, Clitterhouse Farm\'s community hub. A relaxed morning of play, socialising, and fresh air in the garden.',
      recommendation: 'Perfect for parents with little ones — free, welcoming, and outdoors when weather allows.',
      tags: ['play', 'toddler', 'outdoor', 'community', 'free'],
      contact: 'https://www.ouryard.org/events',
      linkLabel: 'Our Yard events',
      mapQuery: 'Clitterhouse Farm, Claremont Road, London NW2',
      promoImage: 'https://images.unsplash.com/photo-1503454537195-1ec1e484bb38?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'local',
      cardTone: 'weekly'
    },
    {
      id: 'event-brent-summer-fun-festival',
      section: 'this-week',
      name: 'Brent Libraries Summer Fun Festival',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      eventDate: 'Wed 1 Jul (launch)',
      eventTime: 'drop-in',
      blurb: 'Free summer programme at all Brent libraries including Willesden Green. Weekly themes (adventure, fantasy, STEM, sports), robotics, storytelling, arts & crafts. Read 6 books, earn rewards.',
      recommendation: 'Fantastic free summer activity — just drop in from Wed 1 July through to Sep.',
      tags: ['library', 'summer', 'reading', 'craft', 'free'],
      contact: 'https://www.brent.gov.uk/summer-in-brent',
      linkLabel: 'Summer in Brent',
      mapQuery: 'The Library at Willesden Green, 95 High Road, NW10 2SF',
      promoImage: 'https://images.unsplash.com/photo-1507842217343-583bb4565c69?w=800&h=450&fit=crop&auto=format',
      featured: true,
      region: 'local',
      cardTone: 'weekly'
    },
    {
      id: 'event-south-kilburn-carnivale',
      section: 'this-week',
      name: 'Street Swap South Kilburn CarniVale',
      age: 'all ages',
      cost: 'free',
      area: 'Kilburn',
      eventDate: 'Sat 4 Jul',
      eventTime: '13:00',
      blurb: 'A community carnival in South Kilburn with street swapping, activities, music, and family fun at the Oxford Kilburn Youth Trust (OK Club).',
      recommendation: 'Lively community event to round off the week — free, outdoor, and fun for all ages.',
      tags: ['carnival', 'street festival', 'community', 'free', 'music'],
      contact: 'https://www.okclub.org.uk',
      linkLabel: 'OK Club events',
      mapQuery: 'Oxford Kilburn Youth Trust, 38 Dane Road, London NW6',
      promoImage: 'https://images.unsplash.com/photo-1533176952548-2c5b8c4e2f28?w=800&h=450&fit=crop&auto=format',
      featured: true,
      region: 'local',
      cardTone: 'weekly'
    },

    // ===== WORTH THE TRIP (wider London) =====
    {
      id: 'event-natural-history-museum',
      section: 'this-week',
      name: 'Natural History Museum',
      age: 'all ages',
      cost: 'free',
      area: 'South Kensington',
      eventDate: 'Open daily',
      eventTime: '10:00–17:50',
      blurb: 'Dinosaurs, earthquakes, volcanoes, and a giant blue whale — all free. One of London\'s most-loved museums and an easy Tube ride to South Kensington.',
      recommendation: 'The dinosaur gallery alone is worth the trip. Book free timed tickets online to skip the queue.',
      tags: ['museum', 'dinosaurs', 'free', 'indoor', 'iconic'],
      contact: 'https://www.nhm.ac.uk/',
      linkLabel: 'Book free tickets',
      mapQuery: 'Natural History Museum, Cromwell Road, London SW7 5BD',
      promoImage: 'https://images.unsplash.com/photo-1563299354-778ae17428d4?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'wider',
      cardTone: 'weekly'
    },
    {
      id: 'event-science-museum',
      section: 'this-week',
      name: 'Science Museum',
      age: '4+',
      cost: 'free',
      area: 'South Kensington',
      eventDate: 'Open daily',
      eventTime: '10:00–18:00',
      blurb: 'Hands-on galleries, space rockets, flight simulators, and the brilliant Wonderlab for kids. Right next door to the Natural History Museum — do both in a day.',
      recommendation: 'The Pattern Pod and Garden galleries are perfect for younger kids. Wonderlab costs extra but is worth it.',
      tags: ['museum', 'science', 'interactive', 'free', 'indoor'],
      contact: 'https://www.sciencemuseum.org.uk/',
      linkLabel: 'Book free tickets',
      mapQuery: 'Science Museum, Exhibition Road, London SW7 2DD',
      promoImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'wider',
      cardTone: 'weekly'
    },
    {
      id: 'event-diana-playground',
      section: 'this-week',
      name: 'Diana Memorial Playground',
      age: '0–12',
      cost: 'free',
      area: 'Kensington Gardens',
      eventDate: 'Open daily',
      eventTime: '10:00–18:45',
      blurb: 'A huge wooden pirate ship, sensory trail, teepees, and a beach. The most magical playground in London, set in Kensington Gardens near the palace.',
      recommendation: 'Go early or late to avoid queues. Bring a change of clothes — the sand and water play area is irresistible.',
      tags: ['playground', 'outdoor', 'free', 'iconic', 'picnic'],
      contact: 'https://www.royalparks.org.uk/visit/parks/kensington-gardens/diana-memorial-playground',
      linkLabel: 'Royal Parks info',
      mapQuery: 'Diana Memorial Playground, Kensington Gardens, London W2 4RU',
      promoImage: 'https://images.unsplash.com/photo-1472162072942-37e9d7a13a2a?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'wider',
      cardTone: 'weekly'
    },
    {
      id: 'event-changing-guard',
      section: 'this-week',
      name: 'Changing of the Guard',
      age: 'all ages',
      cost: 'free',
      area: 'Buckingham Palace',
      eventDate: 'Mon, Wed, Fri, Sun',
      eventTime: '11:00 (arrive 10:30)',
      blurb: 'The iconic ceremony at Buckingham Palace — bearskin hats, military bands, and royal pomp. Free to watch from the railings or The Mall.',
      recommendation: 'Best view is from the Victoria Memorial steps. Check schedule before you go — it sometimes changes.',
      tags: ['ceremony', 'free', 'iconic', 'outdoor', 'royal'],
      contact: 'https://www.householddivision.org.uk/changing-the-guard',
      linkLabel: 'Check schedule',
      mapQuery: 'Buckingham Palace, London SW1A 1AA',
      promoImage: 'https://images.unsplash.com/photo-1513635269970-05849352c775?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'wider',
      cardTone: 'weekly'
    },
    {
      id: 'event-southbank-centre',
      section: 'this-week',
      name: 'Southbank Centre Riverside',
      age: 'all ages',
      cost: 'free',
      area: 'South Bank',
      eventDate: 'Open daily',
      eventTime: 'anytime',
      blurb: 'Street performers, pop-up book markets, fountains to splash in, and unbeatable river views. The Southbank Centre always has free family activities on — check what\'s on.',
      recommendation: 'Walk from Waterloo to London Bridge — street food, playgrounds, and Tate Modern along the way.',
      tags: ['riverside', 'free', 'street food', 'outdoor', 'iconic'],
      contact: 'https://www.southbankcentre.co.uk/whats-on/family/',
      linkLabel: 'What\'s on',
      mapQuery: 'Southbank Centre, Belvedere Road, London SE1 8XX',
      promoImage: 'https://images.unsplash.com/photo-1526129318477-4a2db4c77c36?w=800&h=450&fit=crop&auto=format',
      featured: false,
      region: 'wider',
      cardTone: 'weekly'
    },
    {
      id: 'event-after-school-dreams-week1',
      section: 'this-week',
      name: 'After School Dreams Summer Camp — Week 1',
      age: '3–12',
      cost: 'mid',
      area: 'Ladbroke Grove',
      eventDate: 'Mon 6 – Fri 10 Jul',
      eventTime: '8:30–17:00',
      blurb: 'Summer camp at Instituto Español on Portobello Rd. Junior (3–6) and Senior (7–12) groups. Trips this week: Holland Park, London Museum of Water, cinema. £60/day or £250/week. Sibling discount available.',
      recommendation: 'Great last-minute option — Week 1 starts Monday, and they take daily bookings if you can\'t commit to the full week.',
      tags: ['summer camp', 'holiday club', 'trips', 'daily booking', 'ladbroke grove'],
      contact: './assets/Summer Camp Junior _ After School Dreams _ July 2026-compressed.pdf',
      linkLabel: 'View flyer (Junior 3–6)',
      mapQuery: 'Instituto Español, 317 Portobello Road, London W10 5SZ',
      promoImage: './assets/after-school-dreams-flyer.jpg',
      promoAlt: 'After School Dreams Summer Camp flyer',
      featured: true,
      isNew: true,
      region: 'local',
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
      area: 'Willesden Green',
      blurb: 'Montessori-style early years option for children who like practical, child-led learning.',
      recommendation: 'Good if you prefer a calmer learning approach.',
      tags: ['Montessori', 'nursery', 'early years'],
      contact: 'https://www.rainbowmontessori.co.uk/',
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
      area: 'West Hampstead',
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
      blurb: 'Light-filled Harrow Road nursery with a home-away-from-home feel and an Ofsted Good rating.',
      recommendation: 'Useful if you want longer nursery hours and a calmer, nurturing setting west of Willesden.',
      tags: ['nursery', 'Kensal Green', 'full day', 'Ofsted Good'],
      contact: 'https://www.littlehousesnursery.com/kensal-house-nursery',
      linkLabel: 'Visit nursery',
      mapQuery: 'Kensal House Nursery, White Building, 555 Harrow Road, London W10 4RH'
    },
    {
      id: 'child-college-green',
      section: 'childcare',
      name: 'College Green Nursery School & Services',
      age: '2–4',
      cost: 'free',
      area: 'Kensal Rise',
      blurb: 'Maintained nursery school on College Road with dedicated neighbourhood nursery and pre-school provision.',
      recommendation: 'Strong free option if you want an established Brent nursery school with clear admissions and funded-hours information.',
      tags: ['nursery school', 'free', 'school-linked', 'maintained'],
      contact: 'https://www.cgss.brent.sch.uk',
      linkLabel: 'Visit nursery school',
      mapQuery: 'College Green Nursery School & Services, 161 College Road, London NW10 3PH'
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
      age: '4–11',
      cost: 'mid',
      area: 'Queen\u2019s Park',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      eventTime: '9am–3pm',
      blurb: 'Performing arts holiday camp at Salusbury Primary School. Dance, drama, singing, arts & crafts, and games. Split into Infants (4–6) and Juniors (7–11). £152/week or £30.50/day — book individual days or full weeks. Funded spaces available for families on benefits.',
      recommendation: 'Best if your child likes theatre, music, and a structured camp day — and the daily booking option keeps it flexible.',
      tags: ['holiday camp', 'performing arts', 'summer', 'dance', 'drama'],
      contact: 'https://activities.bookpebble.co.uk/activity/fresh-arts-queens-park-holiday-camp-london-d12557c7-2632-4e49-846e-69a986413c6b',
      linkLabel: 'Book camp',
      mapQuery: 'Salusbury Primary School, Salusbury Road, London NW6 6RG',
      featured: true
    },
    {
      id: 'camp-seed-of-life',
      section: 'camps',
      name: 'The Seed of Life — Holiday Play Scheme',
      age: '2½–5',
      cost: 'low',
      area: 'Wembley',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Holiday play scheme at Happy Days Montessori School on Empire Way, with creative play, science, gardening, karate, trampoline time, and a sand pit.',
      recommendation: 'Good if you want a friendly early-years holiday club with a clear daily rate and manageable hours.',
      tags: ['play scheme', 'early years', 'Wembley'],
      contact: 'https://www.happydaysmontessori.co.uk/',
      linkLabel: 'Visit school',
      mapQuery: 'Happy Days Montessori School, Empire Way, Wembley HA9 0RJ',
      promoImage: './assets/seed-of-life-half-term.jpg',
      promoAlt: 'The Seed of Life Holiday Play Scheme flyer',
      featured: true
    },
    {
      id: 'camp-jag-willesden-sports-centre',
      section: 'camps',
      name: 'Willesden Sports Centre Holiday HQ',
      age: '5–11',
      cost: 'mid',
      area: 'Willesden',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      eventTime: 'check for hours',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      eventTime: '8:30am–6pm',
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
      eventDate: 'Check website for Queen\'s Park dates',
            season: 'summer',
      blurb: 'Gymnastics and circus-skills camps, including Queen\'s Park sessions for children who like active days.',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
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
      eventDate: 'School holidays (check eligibility)',
      season: 'all',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Dance-led holiday camp with creative movement, outdoor play, and a showcase at the end of the week.',
      recommendation: 'Great if you want a structured creative camp rather than sports-only days.',
      tags: ['dance', 'performance', 'outdoors'],
      contact: 'https://hedanceacademy.co.uk/',
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
      eventDate: '20 Jul – 21 Aug (weekly blocks)',
      season: 'summer',
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
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Tennis holiday camps with half-day and full-day options across North West London.',
      recommendation: 'Good if you want a focused racket-sports camp.',
      tags: ['tennis', 'sport', 'holiday camp'],
      contact: 'https://www.servingwinners.co.uk/holiday-camps',
      linkLabel: 'View camps',
      mapQuery: 'North West London'
    },
    {
      id: 'camp-gladstone-park-nta',
      section: 'camps',
      name: 'Gladstone Park NTA Holiday Camps',
      age: '5–9',
      cost: 'mid',
      area: 'Dollis Hill / Brent',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Official National Tennis Association holiday camps at Gladstone Park, combining coaching, games, drills, and mini/junior team challenges.',
      recommendation: 'Best local tennis-camp pick if you want a proper coached tennis day in Brent.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/NTAgladstone/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Gladstone Park, London NW2',
      featured: true
    },
    {
      id: 'camp-elmwood-lawn-tennis-club',
      section: 'camps',
      name: 'Elmwood Lawn Tennis Club Holiday Camps',
      age: '5–12',
      cost: 'mid',
      area: 'Kensal Green / NW10',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Summer tennis camps at Elmwood with Daniele and Will, plus daily and weekly booking options.',
      recommendation: 'Strong if you want a local club camp with clear age bands and flexible bookings.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/ElmwoodLawnTennisClub/Coaching/HolidayCamps',
      linkLabel: 'Open camp page',
      mapQuery: 'Elmwood Lawn Tennis Club, London NW10'
    },
    {
      id: 'camp-childs-hill-park',
      section: 'camps',
      name: 'Childs Hill Park Tennis Camps',
      age: '5–16',
      cost: 'mid',
      area: 'Barnet / Childs Hill',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'FG Tennis holiday camps for kids, with daily Monday–Friday sessions run by fully qualified coaches.',
      recommendation: 'Useful if you want a broader age range and a camp that books by individual sessions.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/FGChildsHillPark/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Childs Hill Park, London NW2'
    },
    {
      id: 'camp-lyttleton-playing-fields',
      section: 'camps',
      name: 'Lyttleton Playing Fields Holiday Camps',
      age: '5–16+',
      cost: 'mid',
      area: 'Barnet / N2',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Holiday tennis camps for kids in school holidays, with age and ability groups and bookable sessions.',
      recommendation: 'Good extra option if you want a north-west London club camp a bit beyond Brent.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/FGLyttletonPlayingFields/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Lyttleton Playing Fields, London N2'
    },
    {
      id: 'camp-queens-park-tennis-courts',
      section: 'camps',
      name: "Queen's Park Tennis Courts Holiday Camps",
      age: 'all ages',
      cost: 'mid',
      area: "Queen's Park",
      eventDate: 'TBC — check website',
            season: 'tbc',
            blurb: 'Queen\'s Park Tennis Courts says it can offer tennis camps in the park and asks visitors to check back for details.',
      recommendation: 'Worth watching if you want a very local option, but details are not yet posted.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/QueensParkTennisCourts/Coaching/Camps',
      linkLabel: 'Check camps',
      mapQuery: "Queen's Park Tennis Courts, London"
    },
    {
      id: 'camp-vale-tennis-coaching',
      section: 'camps',
      name: 'Vale Tennis Coaching Holiday Camps',
      age: '7–16',
      cost: 'mid',
      area: 'Maida Vale / Little Venice',
      eventDate: 'Summer: Jul–Aug (3-day blocks)',
      season: 'summer',
      blurb: 'Official three-day summer tennis camps at Littletons Tennis Club with coaching, pickleball, team activities, and clubhouse backup for wet weather.',
      recommendation: 'Strong nearby racket-sports option if you want a well-structured summer camp just beyond Queen’s Park.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/ValeTennisCoaching/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Littletons Tennis Club, Maida Vale, London'
    },
    {
      id: 'camp-highgate-tennis',
      section: 'camps',
      name: 'Highgate Tennis Camps',
      age: '4–16',
      cost: 'mid',
      area: 'Highgate',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Official Highgate Tennis holiday camps with morning and full-day options, age-banded groups, and daily or week-long bookings.',
      recommendation: 'Good further-out option if you want clearer pricing and longer full-day tennis cover.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://highgate-tennis.co.uk/tennis-camps',
      linkLabel: 'View camp details',
      mapQuery: 'Highgate Cricket and Lawn Tennis Club, London'
    },
    {
      id: 'camp-cherry-tree-wood',
      section: 'camps',
      name: 'Cherry Tree Wood Tennis & Multi-Sport Camps',
      age: '6–14',
      cost: 'mid',
      area: 'East Finchley',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Official FG Tennis holiday camp mixing tennis with football, basketball, and athletics games in a structured Monday–Friday format.',
      recommendation: 'Useful if you want a stronger multi-sport alternative to a pure tennis camp.',
      tags: ['tennis', 'racket sports', 'holiday camp', 'multi-sport'],
      contact: 'https://clubspark.lta.org.uk/CherryTreeWood/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Cherry Tree Wood, East Finchley, London'
    },
    {
      id: 'camp-northway-gardens',
      section: 'camps',
      name: 'Northway Gardens Holiday Camps',
      age: '5–16+',
      cost: 'mid',
      area: 'Hampstead Garden Suburb / NW11',
      eventDate: '20 Jul – 28 Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Official FG Tennis holiday camps for children grouped by age and ability, aimed at beginners through more advanced players.',
      recommendation: 'Good overflow option if you want another official north-west London tennis venue beyond Childs Hill and Lyttleton.',
      tags: ['tennis', 'racket sports', 'holiday camp'],
      contact: 'https://clubspark.lta.org.uk/FGNorthwayGardens/Coaching/Camps',
      linkLabel: 'Open camp page',
      mapQuery: 'Northway Gardens, London NW11'
    },

    {
      id: 'camp-msport-active',
      section: 'camps',
      name: 'MSport Active Kidz Holiday Camp',
      age: '4–12',
      cost: 'mid',
      area: 'London',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
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
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Creative holiday camp for kids in Kensal Rise, run at the Scout Hall / Scout Hut in NW10.',
      recommendation: 'Good if you want something playful and community-based.',
      tags: ['creative', 'holiday club', 'Kensal Rise'],
      contact: 'https://www.queensparkfolk.com/qpfguides/a-local-guide-to-half-term-camps-and-activities-this-feb-2026-in-queens-park-kensal-rise-and-beyond',
      linkLabel: 'Local guide',
      mapQuery: 'Kensal Rise, London NW10'
    },
    {
      id: 'camp-2-da-stage',
      section: 'camps',
      name: '2 Da Stage Holiday Playscheme',
      age: '5–12',
      cost: 'mid',
      area: 'Wembley',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Holiday playscheme with drama, street dance, singing, music, and a proper full-day structure.',
      recommendation: 'Best if you want a lively arts-led holiday option with childcare hours.',
      tags: ['performing arts', 'holiday camp', 'creative'],
      contact: 'https://2dastage.com/playscheme',
      linkLabel: 'View playscheme',
      mapQuery: 'Wembley, London'
    },
    {
      id: 'camp-jag-salusbury',
      section: 'camps',
      name: 'Junior Adventures Group — Salusbury Primary School',
      age: '4–11',
      cost: 'mid',
      area: 'Queen’s Park',
      eventDate: 'Summer: Jul–Aug (weekly blocks)',
      season: 'summer',
      blurb: 'Holiday club option at Salusbury Primary School with active play, games, and wraparound-friendly booking.',
      recommendation: 'Useful if you want a school-based holiday club near Queen’s Park.',
      tags: ['holiday club', 'multi-activity', 'wraparound'],
      contact: 'https://www.junioradventuresgroup.co.uk/find-us/salusbury-primary-school',
      linkLabel: 'See club page',
      mapQuery: 'Salusbury Primary School, Salusbury Road, London NW6 6RG'
    },
    {
      id: 'camp-ett-sports',
      section: 'camps',
      name: 'ETT Sports Summer Camp',
      age: '4–12',
      cost: 'free',
      area: 'Mora School, NW2',
      eventDate: '20 Jul – 28 Aug',
      season: 'summer',
      eventTime: 'check for hours',
      blurb: 'Six-week summer camp run by Coach Earnest at Mora School (Jul 20 – Aug 28). FSM-funded: 16 free days (4 days/wk, weeks 1–4). Non-FSM options from £45/day. Trips include Houses of Parliament (confirmed 27 Jul), Tower of London, Kensington Palace. Weeks 5–6: ballet, dance, musical instruments, drama, multi-sports, robotics, bouncy castle, film workshops.',
      recommendation: 'Best if you want a local school-based summer camp with FSM-funded free places, trips, and a wide range of activities including arts and sports.',
      tags: ['summer', 'multi-activity', 'FSM', 'trips', 'sports', 'arts'],
      contact: 'https://www.ettsports.co.uk/',
      linkLabel: 'Contact ETT Sports',
      mapQuery: 'Mora School, Mora Road, London NW2'
    },
    {
      id: 'camp-after-school-dreams',
      section: 'camps',
      name: 'After School Dreams Summer Camp',
      age: '3–12',
      cost: 'mid',
      area: 'Ladbroke Grove / Portobello',
      eventDate: '6 Jul – 30 Jul (4 weeks)',
      season: 'summer',
      eventTime: '8:30am–5pm',
      blurb: 'Summer camp at Instituto Español on Portobello Road. Junior group (3–6) and Senior group (7–12) with weekly themes including Circus and Sports weeks. Trips to Holland Park, London Museum of Water, cinema, ice skating, zoo, mini golf, Queen\'s Park, and bouldering. £60/day or £250/week with sibling discount (£50/day). T-shirt required (£15). Both Junior and Senior flyers available below.',
      recommendation: 'Strong option for families near Ladbroke Grove / Notting Hill — daily booking available, wide age range, and packed trip schedule.',
      tags: ['summer camp', 'holiday club', 'trips', 'daily booking', 'ladbroke grove', 'portobello'],
      contact: './assets/Summer Camp Junior _ After School Dreams _ July 2026-compressed.pdf',
      linkLabel: 'Flyer: Junior (3–6) — tap for Senior too',
      mapQuery: 'Instituto Español, 317 Portobello Road, London W10 5SZ',
      promoImage: './assets/after-school-dreams-flyer.jpg',
      promoAlt: 'After School Dreams Summer Camp flyer',
      featured: true,
      isNew: true
    },
    {
      id: 'camp-camp-beaumont-mill-hill',
      section: 'camps',
      name: 'Camp Beaumont — Mill Hill School',
      age: '3–14',
      cost: 'mid',
      area: 'Mill Hill',
      blurb: 'Long-running multi-activity camps with four age groups: Playtime (3–4), Magic (5–7), Active (8–11), and Teens (12–14). Arts, sports, team games, and themed days. Extended hours 8am–6pm available. Ofsted-registered.',
      recommendation: 'The most established camp brand in the area — well-organised, professional, and kids genuinely love it.',
      tags: ['multi-activity', 'ofsted', 'mill hill', 'all ages'],
      contact: 'https://www.campbeaumont.co.uk/',
      linkLabel: 'Camp Beaumont',
      mapQuery: 'Mill Hill School, The Ridgeway, London NW7 1QS'
    },
    {
      id: 'camp-super-camps-south-hampstead',
      section: 'camps',
      name: 'Super Camps — South Hampstead High School',
      age: '4–12',
      cost: 'high',
      area: 'South Hampstead',
      blurb: 'Multi-activity camps at South Hampstead High School with specialist courses in art, cookery, science, and sports alongside general activities. Extended day options available. Very popular — book early for summer.',
      recommendation: 'Premium option but excellent quality. The specialist courses (cookery, science) are a standout for kids with particular interests.',
      tags: ['multi-activity', 'specialist', 'south hampstead', 'premium'],
      contact: 'https://www.supercamps.co.uk/',
      linkLabel: 'Super Camps',
      mapQuery: 'South Hampstead High School, 3 Maresfield Gardens, London NW3 5SS'
    },
    {
      id: 'camp-super-camps-west-hampstead',
      section: 'camps',
      name: 'Super Camps — The Mulberry House School',
      age: '4–12',
      cost: 'high',
      area: 'West Hampstead',
      blurb: 'Multi-activity camps at Mulberry House School in the heart of West Hampstead. Walking distance for NW6 families. Arts, sports, games, and specialist workshops.',
      recommendation: 'Most convenient location for West Hampstead and Kilburn families — walkable, no car needed.',
      tags: ['multi-activity', 'west hampstead', 'walkable'],
      contact: 'https://www.supercamps.co.uk/',
      linkLabel: 'Super Camps',
      mapQuery: 'The Mulberry House School, 7 Minster Road, London NW2 3SD'
    },
    {
      id: 'camp-chelsea-fc-paddington',
      section: 'camps',
      name: 'Chelsea FC Foundation Soccer School — Paddington',
      age: '4–14',
      cost: 'low',
      area: 'Maida Vale',
      blurb: 'Chelsea FC coaching at Paddington Recreation Ground. Professional FA-qualified coaches, skill development, mini-tournaments, and prizes. Boys and girls welcome. Book by the day or full week. Good value compared to private camps.',
      recommendation: 'Genuinely affordable for the quality — Chelsea-branded kit included. Great for football-mad kids.',
      tags: ['football', 'chelsea', 'maida vale', 'coaching', 'affordable'],
      contact: 'https://www.chelseafc.com/en/foundation',
      linkLabel: 'Chelsea FC Foundation',
      mapQuery: 'Paddington Recreation Ground, Maida Vale, London W9'
    },
    {
      id: 'camp-arsenal-soccer',
      section: 'camps',
      name: 'Arsenal Soccer Schools — North London',
      age: '5–12',
      cost: 'low',
      area: 'North London',
      blurb: 'Arsenal FC holiday football courses at various North London venues including sites accessible from NW London. FA-qualified coaches, skills sessions, and small-sided games. Full Arsenal training kit included.',
      recommendation: 'One of the best-value football camps — kit included and Arsenal coaching quality is excellent.',
      tags: ['football', 'arsenal', 'coaching', 'affordable'],
      contact: 'https://www.arsenalsoccerschools.com/',
      linkLabel: 'Arsenal Soccer Schools',
      mapQuery: 'Arsenal, North London'
    },
    {
      id: 'camp-qpr-community',
      section: 'camps',
      name: 'QPR Community Trust — holiday courses',
      age: '5–14',
      cost: 'low',
      area: 'West London',
      blurb: 'QPR\'s community programme runs football holiday courses across West and North West London. Affordable, inclusive, and often free or heavily subsidised for local children. Check the Community Trust website for venues and dates.',
      recommendation: 'Often the cheapest football option — QPR\'s community work is genuinely excellent and inclusive.',
      tags: ['football', 'qpr', 'community', 'affordable', 'inclusive'],
      contact: 'https://www.qpr.co.uk/community',
      linkLabel: 'QPR Community Trust',
      mapQuery: 'QPR, Loftus Road, London'
    },
    {
      id: 'camp-all-star-tennis',
      section: 'camps',
      name: 'All Star Tennis — holiday camps',
      age: '3–16',
      cost: 'low',
      area: 'NW London',
      blurb: 'LTA-accredited tennis holiday camps at multiple London parks. Qualified coaches, all equipment provided, grouped by age and ability. Half-day and full-day options. Runs every school holiday. Check website for nearest venue.',
      recommendation: 'Excellent tennis coaching at council-court prices. The coaches really know how to make it fun for all ability levels.',
      tags: ['tennis', 'lta', 'all ages', 'outdoor', 'affordable'],
      contact: 'https://www.allstartennis.co.uk/',
      linkLabel: 'All Star Tennis',
      mapQuery: 'All Star Tennis, London'
    },
    {
      id: 'camp-will-to-win-regents',
      section: 'camps',
      name: 'Will to Win Tennis — Regent\'s Park',
      age: '3–16',
      cost: 'mid',
      area: 'Regent\'s Park',
      blurb: 'Tennis holiday camps at the Regent\'s Park tennis centre. LTA-accredited coaching, all abilities from beginner to advanced. Individual days or full weeks. Indoor and outdoor courts so weather-proof. Café on site for parents.',
      recommendation: 'Best tennis facility in the area — proper club-quality courts and weather-proof with indoor backup.',
      tags: ['tennis', 'regents park', 'indoor courts', 'all ages'],
      contact: 'https://www.willtowin.co.uk/',
      linkLabel: 'Will to Win',
      mapQuery: 'Will to Win, Regent\'s Park, York Bridge, London NW1 4NU'
    },
    {
      id: 'camp-fit-for-sport',
      section: 'camps',
      name: 'Fit for Sport — Better leisure centres',
      age: '4–12',
      cost: 'low',
      area: 'Multiple NW London',
      blurb: 'Multi-sport activity camps at Better leisure centres including Swiss Cottage and other NW London sites. Sports, games, and arts led by qualified activity leaders. Extended hours available (8am–6pm). Good value council-linked pricing.',
      recommendation: 'Most affordable multi-activity option. Runs at council leisure centres so prices are kept reasonable.',
      tags: ['multi-sport', 'leisure centre', 'affordable', 'extended hours'],
      contact: 'https://www.fitforsport.co.uk/',
      linkLabel: 'Fit for Sport',
      mapQuery: 'Swiss Cottage Leisure Centre, London NW3 3NF'
    },
    {
      id: 'camp-barracudas',
      section: 'camps',
      name: 'Barracudas — multi-activity camps',
      age: '4–14',
      cost: 'mid',
      area: 'North London',
      blurb: 'Established camp chain with 80+ activities including archery, motorsports, aqua inflatables, and creative arts. Ofsted-registered with extended hours 8am–6pm included in the price. Check website for nearest NW London venue.',
      recommendation: 'Best activity range of any chain — the aqua inflatables and go-karts are genuinely exciting for kids.',
      tags: ['multi-activity', 'ofsted', 'adventure', 'extended hours'],
      contact: 'https://www.barracudas.co.uk/',
      linkLabel: 'Barracudas',
      mapQuery: 'Barracudas, London'
    },
    {
      id: 'camp-stagecoach-holiday',
      section: 'camps',
      name: 'Stagecoach — holiday workshops',
      age: '4–18',
      cost: 'mid',
      area: 'Queen\'s Park & Primrose Hill',
      blurb: 'Performing arts holiday workshops at Stagecoach\'s local schools: Princess Frederica (Queen\'s Park), Primrose Hill Primary, and Hendon School. Drama, dance, and singing culminating in a performance. Runs most school holidays.',
      recommendation: 'Perfect for budding performers — intensive but fun, and the end-of-week show is genuinely impressive.',
      tags: ['performing arts', 'drama', 'dance', 'singing', 'queens park', 'primrose hill'],
      contact: 'https://www.stagecoach.co.uk/',
      linkLabel: 'Stagecoach',
      mapQuery: 'Princess Frederica School, College Road, London NW10 5TP'
    },
    {
      id: 'camp-fire-tech',
      section: 'camps',
      name: 'Fire Tech Camp — coding & tech',
      age: '8–17',
      cost: 'high',
      area: 'Central / NW London',
      blurb: 'Tech holiday camps: coding, robotics, game design, AI, and digital media. University-level instructors. Courses from beginner to advanced. Check for venues near NW London (University of Westminster, Imperial, etc.).',
      recommendation: 'Best-in-class tech education for kids — if your child is into gaming or coding, this is the one.',
      tags: ['coding', 'stem', 'tech', 'robotics', 'premium'],
      contact: 'https://www.firetechcamp.com/',
      linkLabel: 'Fire Tech',
      mapQuery: 'Fire Tech Camp, London'
    },
    {
      id: 'camp-little-house-science',
      section: 'camps',
      name: 'Little House of Science — holiday workshops',
      age: '4–12',
      cost: 'mid',
      area: 'Hampstead / St John\'s Wood',
      blurb: 'Hands-on science workshops and holiday camps at venues around Hampstead and St John\'s Wood. Experiments, demonstrations, and take-home projects. Different themes each holiday — space, chemistry, engineering, nature.',
      recommendation: 'Brilliant for curious kids — the experiments are genuinely exciting and they come home buzzing about science.',
      tags: ['stem', 'science', 'experiments', 'hampstead', 'hands-on'],
      contact: 'https://www.littlehouseofscience.com/',
      linkLabel: 'Little House of Science',
      mapQuery: 'Little House of Science, Hampstead, London'
    },
    {
      id: 'camp-razzamataz',
      section: 'camps',
      name: 'Razzamataz Theatre Schools — holiday workshops',
      age: '4–18',
      cost: 'mid',
      area: 'NW London',
      blurb: 'Musical theatre holiday workshops: singing, dancing, and acting with themed weeks (West End, Disney, pop). Branches across NW London. Fun, confidence-building, and a great intro to performing arts.',
      recommendation: 'More accessible than Stagecoach for beginners — emphasis on fun and confidence rather than technique.',
      tags: ['performing arts', 'musical theatre', 'confidence', 'fun'],
      contact: 'https://www.razzamataz.co.uk/',
      linkLabel: 'Razzamataz',
      mapQuery: 'Razzamataz, London'
    },
    {
      id: 'camp-art-academy-camden',
      section: 'camps',
      name: 'Art Academy — holiday workshops',
      age: '6–16',
      cost: 'mid',
      area: 'Camden',
      blurb: 'Proper art school holiday workshops in Camden. Drawing, painting, sculpture, printmaking — taught by practising artists in real studios. Half-day and full-day options. Kids come home with genuine artwork.',
      recommendation: 'Seriously good art education — this isn\'t craft time, it\'s real technique taught by real artists.',
      tags: ['art', 'creative', 'camden', 'painting', 'sculpture'],
      contact: 'https://www.artacademy.org.uk/',
      linkLabel: 'Art Academy',
      mapQuery: 'Art Academy, Camden, London NW1'
    },
    {
      id: 'camp-camden-haf',
      section: 'camps',
      name: 'Camden Healthy Holidays (HAF)',
      age: '5–16',
      cost: 'free',
      area: 'Camden',
      blurb: 'Government-funded free holiday activities and food programme for children eligible for free school meals. Activities, meals, and snacks included at no cost. Multiple venues across Camden — check the council website for providers and booking.',
      recommendation: 'Free, high-quality provision for eligible families. Book early as places fill up fast each holiday.',
      tags: ['free', 'haf', 'camden', 'fsm', 'meals'],
      contact: 'https://www.camden.gov.uk/healthy-holidays',
      linkLabel: 'Camden HAF',
      mapQuery: 'Camden, London'
    },
    {
      id: 'camp-swiss-cottage-holiday',
      section: 'camps',
      name: 'Swiss Cottage Leisure Centre — holiday activities',
      age: '3–14',
      cost: 'low',
      area: 'Swiss Cottage',
      blurb: 'Council leisure centre running holiday activity programmes: swimming crash courses, soft play, junior gym, and multi-sport sessions. Pay-as-you-go or book a week. About 15 minutes from Willesden on the Jubilee line.',
      recommendation: 'Best-value swimming and fitness option. The holiday swimming crash courses are brilliant for building water confidence fast.',
      tags: ['swimming', 'leisure centre', 'affordable', 'swiss cottage', 'multi-sport'],
      contact: 'https://www.better.org.uk/leisure-centre/london/camden/swiss-cottage-leisure-centre',
      linkLabel: 'Swiss Cottage',
      mapQuery: 'Swiss Cottage Leisure Centre, Adelaide Road, London NW3 3NF'
    },
    {
      id: 'camp-hendon-gymnastics',
      section: 'camps',
      name: 'Gymnastics holiday camps — Hendon Leisure Centre',
      age: '4–14',
      cost: 'low',
      area: 'Hendon',
      blurb: 'Gymnastics-focused holiday camps at Hendon Leisure Centre (Better UK). Beams, bars, vault, floor work with qualified coaches. All levels welcome. Book by the day or week. Good indoor option whatever the weather.',
      recommendation: 'Rare dedicated gymnastics holiday provision at council prices. The coaches are experienced competitive gymnasts.',
      tags: ['gymnastics', 'indoor', 'hendon', 'affordable'],
      contact: 'https://www.better.org.uk/leisure-centre/london/barnet/hendon-leisure-centre',
      linkLabel: 'Hendon Leisure',
      mapQuery: 'Hendon Leisure Centre, Marble Drive, London NW2 1XQ'
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
      id: 'act-willesden-green-library',
      section: 'activities',
      name: 'The Library at Willesden Green',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'Library, gallery, community rooms, performance space, and Brent Museum / Archives in one building.',
      recommendation: 'Best local library pick if you want an easy indoor stop plus things to do.',
      tags: ['library', 'museum', 'free'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/the-library-at-willesden-green',
      linkLabel: 'View library page',
      mapQuery: 'The Library at Willesden Green, High Road, London'
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
      id: 'act-brent-library-events',
      section: 'activities',
      name: 'Brent library events',
      age: '0–11',
      cost: 'free',
      area: 'Brent',
      blurb: 'Regular kids events, family learning, and free talks across Brent libraries — a good low-cost fallback.',
      recommendation: 'Best recurring source for calm indoor activities.',
      tags: ['library', 'events', 'free'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/library-events',
      linkLabel: 'View library events',
      mapQuery: 'Brent libraries, London'
    },
    {
      id: 'act-willesden-sports-swim',
      section: 'activities',
      name: 'Willesden Sports Centre swimming lessons',
      age: '3 months+',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Swim England lessons across baby, toddler, children’s, and adult stages, with progress tracking and lane/public swim perks.',
      recommendation: 'Your strongest local all-round swim lesson option.',
      tags: ['swim', 'lessons', 'learn to swim'],
      contact: 'https://www.leisurecentre.com/willesden-sports-centre/swimming-lessons',
      linkLabel: 'Book swimming lessons',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-willesden-sports-baby-swim',
      section: 'activities',
      name: 'Willesden Sports Centre baby, toddler & preschool lessons',
      age: '3 months–4',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Parent-in-water sessions for babies, toddlers, and preschoolers learning water confidence.',
      recommendation: 'Best for starting very young in a local pool.',
      tags: ['swim', 'baby swim', 'preschool'],
      contact: 'https://www.leisurecentre.com/willesden-sports-centre/swimming-lessons/baby-toddler-and-preschool-lessons',
      linkLabel: 'See preschool swim',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-willesden-sports-send-swim',
      section: 'activities',
      name: 'Willesden Sports Centre SEND swimming lessons',
      age: 'all ages',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Small-group and one-to-one lessons for children and young people with an EHC plan.',
      recommendation: 'Very useful if you need a more supported water-learning route.',
      tags: ['swim', 'SEND', 'lessons'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/send-local-offer/send-local-offer-directory/swimming-lessons-for-send-at-willesden-sports-centre',
      linkLabel: 'View SEND swim',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-cygnets-manor',
      section: 'activities',
      name: 'Cygnets Swim School at Manor School',
      age: '0–9',
      cost: 'mid',
      area: 'Kensal Rise / NW10',
      blurb: 'Child-friendly swimming lessons from birth to age 9 in a warm pool with small groups.',
      recommendation: 'Good if you want a calmer, more personal swim school.',
      tags: ['swim', 'lessons', 'small groups'],
      contact: 'https://www.cygnetswimming.co.uk',
      linkLabel: 'Visit Cygnets',
      mapQuery: 'Manor School, Chamberlayne Road, London NW10 3NT'
    },
    {
      id: 'act-swimtank-willesden',
      section: 'activities',
      name: 'SWIMTANK Willesden',
      age: 'children',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Private indoor pool with stroke-based children’s lessons in a warm, controlled setting.',
      recommendation: 'Handy if you want another local swim school option.',
      tags: ['swim', 'lessons', 'private pool'],
      contact: 'https://swim-tank.co.uk/willesden',
      linkLabel: 'View availability',
      mapQuery: '180 Willesden Lane, Willesden, London'
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
      id: 'act-natural-history-museum',
      section: 'activities',
      name: 'Natural History Museum',
      age: 'all ages',
      cost: 'free',
      area: 'South Kensington',
      blurb: 'Dinosaur galleries, the blue whale hall, and big hands-on family appeal for a full London day out.',
      recommendation: 'One of the easiest museum wins for kids of almost any age.',
      tags: ['museum', 'dinosaurs', 'free'],
      contact: 'https://www.nhm.ac.uk/',
      linkLabel: 'Visit museum',
      mapQuery: 'Natural History Museum, Cromwell Road, London'
    },
    {
      id: 'act-science-museum',
      section: 'activities',
      name: 'Science Museum',
      age: 'all ages',
      cost: 'free',
      area: 'South Kensington',
      blurb: 'A classic kids museum with rocket, flight, space, and interactive galleries that actually work well for families.',
      recommendation: 'Great if your child likes buttons, machines, and wow moments.',
      tags: ['museum', 'science', 'free'],
      contact: 'https://www.sciencemuseum.org.uk/home',
      linkLabel: 'Visit museum',
      mapQuery: 'Science Museum, Exhibition Road, London'
    },
    {
      id: 'act-young-vanda',
      section: 'activities',
      name: 'Young V&A',
      age: '0–14',
      cost: 'free',
      area: 'Bethnal Green',
      blurb: 'Designed for children and families, with play, design, and hands-on galleries built into the experience.',
      recommendation: 'Best for younger kids who like creative, interactive museums.',
      tags: ['museum', 'design', 'free'],
      contact: 'https://www.vam.ac.uk/young',
      linkLabel: 'Visit Young V&A',
      mapQuery: 'Young V&A, Cambridge Heath Road, London'
    },
    {
      id: 'act-london-transport-museum',
      section: 'activities',
      name: 'London Transport Museum',
      age: 'all ages',
      cost: 'mid',
      area: 'Covent Garden',
      blurb: 'Brilliant for children who love trains, buses, and moving vehicles of all kinds.',
      recommendation: 'Easy to pair with a tube ride and a walk around Covent Garden.',
      tags: ['museum', 'transport', 'trains'],
      contact: 'https://www.ltmuseum.co.uk/',
      linkLabel: 'Visit museum',
      mapQuery: 'London Transport Museum, Covent Garden Piazza, London'
    },
    {
      id: 'act-british-museum',
      section: 'activities',
      name: 'British Museum',
      age: '8+',
      cost: 'free',
      area: 'Bloomsbury',
      blurb: 'Huge historic museum with enough to choose a short targeted family visit or a longer culture trip.',
      recommendation: 'Best when you want one iconic London museum day out.',
      tags: ['museum', 'history', 'free'],
      contact: 'https://www.britishmuseum.org/',
      linkLabel: 'Visit museum',
      mapQuery: 'British Museum, Great Russell Street, London'
    },
    {
      id: 'act-london-museum-docklands',
      section: 'activities',
      name: 'London Museum Docklands',
      age: 'all ages',
      cost: 'free',
      area: 'Canary Wharf',
      blurb: 'Riverside museum with 400 years of Docklands history and strong family-friendly galleries.',
      recommendation: 'Good for a longer trip when you do not mind getting the Tube out east.',
      tags: ['museum', 'history', 'free'],
      contact: 'https://www.londonmuseum.org.uk/docklands',
      linkLabel: 'Visit museum',
      mapQuery: 'London Museum Docklands, Hertsmere Road, London'
    },
    {
      id: 'act-postal-museum',
      section: 'activities',
      name: 'The Postal Museum',
      age: 'all ages',
      cost: 'mid',
      area: 'Clerkenwell',
      blurb: 'A hands-on museum where the Mail Rail ride makes it feel more like an adventure than a history lesson.',
      recommendation: 'Great for a slightly different kids day out.',
      tags: ['museum', 'mail rail', 'history'],
      contact: 'https://www.postalmuseum.org/',
      linkLabel: 'Visit museum',
      mapQuery: 'The Postal Museum, Phoenix Place, London'
    },
    {
      id: 'act-national-maritime-museum',
      section: 'activities',
      name: 'National Maritime Museum',
      age: 'all ages',
      cost: 'free',
      area: 'Greenwich',
      blurb: 'Ships, sea stories, and plenty of room to build a family day around Greenwich.',
      recommendation: 'Worth the trip if your child likes transport and history.',
      tags: ['museum', 'ships', 'free'],
      contact: 'https://www.rmg.co.uk/national-maritime-museum',
      linkLabel: 'Visit museum',
      mapQuery: 'National Maritime Museum, Greenwich, London'
    },
    {
      id: 'act-horniman-museum',
      section: 'activities',
      name: 'Horniman Museum and Gardens',
      age: 'all ages',
      cost: 'free',
      area: 'Forest Hill',
      blurb: 'Family favourite with animals, natural history, and gardens outside for a full outing.',
      recommendation: 'One of the best if you want a museum plus park-style outdoor time.',
      tags: ['museum', 'gardens', 'free'],
      contact: 'https://www.horniman.ac.uk/museum/',
      linkLabel: 'Visit museum',
      mapQuery: 'Horniman Museum and Gardens, London'
    },
    {
      id: 'act-national-army-museum',
      section: 'activities',
      name: 'National Army Museum',
      age: 'all ages',
      cost: 'free',
      area: 'Chelsea',
      blurb: 'Clear, family-friendly galleries with hands-on exhibits and enough space to browse without overload.',
      recommendation: 'Good for an accessible history day out with kids.',
      tags: ['museum', 'history', 'free'],
      contact: 'https://www.nam.ac.uk/',
      linkLabel: 'Visit museum',
      mapQuery: 'National Army Museum, Chelsea, London'
    },
    {
      id: 'act-grace-poise',
      section: 'activities',
      name: 'Grace & Poise Academy CIC',
      age: '2–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Dance and confidence-building classes from a local ClassForKids listing.',
      recommendation: 'Useful if you want a regular weekly slot.',
      tags: ['dance', 'class', 'weekly'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-idea-design-hub',
      section: 'activities',
      name: 'IDEA Design Hub CIC',
      age: '4–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Creative design / arts sessions listed in the local classes directory.',
      recommendation: 'Good for children who like making and designing.',
      tags: ['creative', 'art', 'class'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-jinga-jinga',
      section: 'activities',
      name: 'Jinga Jinga Kids',
      age: '2–8',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Music and movement classes from the Willesden Green local classes listing.',
      recommendation: 'Good for younger children who need energy out.',
      tags: ['music', 'movement', 'class'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-flexi-athletics',
      section: 'activities',
      name: 'Flexi Athletics Gymnastics',
      age: '4–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Gymnastics sessions listed locally for children who like jumping, balance, and movement.',
      recommendation: 'Useful if you want a sporty class with progression.',
      tags: ['gymnastics', 'class', 'sport'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-maida-vale-ballet',
      section: 'activities',
      name: 'Maida Vale Ballet School',
      age: '2–12',
      cost: 'varies',
      area: 'Maida Vale',
      blurb: 'Ballet classes in the wider local ClassForKids listing.',
      recommendation: 'Good if your child likes a structured dance class.',
      tags: ['ballet', 'dance', 'class'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Maida Vale, London'
    },
    {
      id: 'act-switch-sports',
      section: 'activities',
      name: 'Switch Sports CIC',
      age: '4–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Multi-sport and games classes from the local ClassForKids directory.',
      recommendation: 'Handy if you want a sporty regular commitment.',
      tags: ['sport', 'games', 'class'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-summit-club-kids',
      section: 'activities',
      name: 'Summit Club Kids',
      age: '4–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'After-school style activities from the local classes listing.',
      recommendation: 'Useful when you want a more routine class option.',
      tags: ['club', 'class', 'weekly'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-more-than-sport',
      section: 'activities',
      name: 'More than sport London',
      age: '4–12',
      cost: 'varies',
      area: 'Willesden Green',
      blurb: 'Another local sports and movement option from the ClassForKids Willesden Green listing.',
      recommendation: 'Good if your child likes activity-heavy sessions.',
      tags: ['sport', 'movement', 'class'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
    },
    {
      id: 'act-aurora-gymnastics',
      section: 'activities',
      name: 'Aurora Gymnastics West London',
      age: '4–12',
      cost: 'varies',
      area: 'West London',
      blurb: 'Gymnastics classes listed in the Willesden Green activity directory.',
      recommendation: 'Useful if you want another gymnastics option nearby.',
      tags: ['gymnastics', 'class', 'sport'],
      contact: 'https://classforkids.io/en-GB/classes/willesden-green',
      linkLabel: 'Browse classes',
      mapQuery: 'Willesden Green, London'
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
    },
    {
      id: 'act-brent-library-services',
      section: 'activities',
      name: "Children's and Young People's Library Services",
      age: '0–16',
      cost: 'free',
      area: 'Brent',
      blurb: 'Free library services for children and young people, including story times, rhyme times, STEM, clubs, and holiday activities.',
      recommendation: 'Best if you want the broader library offer rather than a single event.',
      tags: ['library', 'free', 'children'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries/children-and-young-peoples-library-services',
      linkLabel: 'View services',
      mapQuery: 'Brent libraries, London'
    },
    {
      id: 'act-willesden-gallery',
      section: 'activities',
      name: 'Willesden Gallery',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'Indoor gallery space at the library with exhibitions and a calmer culture stop for mixed-age families.',
      recommendation: 'Good when you want something quiet and easy to pair with the library.',
      tags: ['gallery', 'culture', 'free'],
      contact: 'https://www.brent.gov.uk/libraries-arts-and-heritage/willesden-gallery',
      linkLabel: 'View gallery',
      mapQuery: 'The Library at Willesden Green, London'
    },
    {
      id: 'act-portraits-of-brent',
      section: 'activities',
      name: 'Portraits of Brent',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'An ongoing local culture project at the library and exhibition space with a strong Brent identity.',
      recommendation: 'Worth a look if you like local-history-led family outings.',
      tags: ['exhibition', 'culture', 'free'],
      contact: 'https://www.brent.gov.uk/events-in-brent/2026/may/portraits-of-brent',
      linkLabel: 'View event',
      mapQuery: 'The Library at Willesden Green, London'
    },
    {
      id: 'act-walking-for-health-roundwood',
      section: 'activities',
      name: 'Walking for Health — Roundwood Park',
      age: 'all ages',
      cost: 'free',
      area: 'Harlesden',
      blurb: 'Free guided walk in Roundwood Park as part of Brent’s healthy walking programme.',
      recommendation: 'Simple, free, and useful if you want a structured walk rather than a playground trip.',
      tags: ['walk', 'outdoors', 'free'],
      contact: 'https://www.brent.gov.uk/events-in-brent/regular-events/walking-for-health---roundwood-park',
      linkLabel: 'See walk',
      mapQuery: 'Roundwood Park, London'
    },
    {
      id: 'act-walking-for-health-gladstone',
      section: 'activities',
      name: 'Walking for Health — Gladstone Park',
      age: 'all ages',
      cost: 'free',
      area: 'Dollis Hill',
      blurb: 'Free guided walk in Gladstone Park with a proper community feel and a gentle pace.',
      recommendation: 'Good if you want a low-cost outdoor routine.',
      tags: ['walk', 'outdoors', 'free'],
      contact: 'https://www.brent.gov.uk/events-in-brent/regular-events/walking-for-health---gladstone-park',
      linkLabel: 'See walk',
      mapQuery: 'Gladstone Park, London'
    },
    {
      id: 'act-outdoor-gyms-brent',
      section: 'activities',
      name: 'Outdoor gyms in Brent',
      age: 'all ages',
      cost: 'free',
      area: 'Brent',
      blurb: 'Free outdoor gym spaces across Brent, with some instructor-led sessions mentioned by the council.',
      recommendation: 'Handy when you want easy movement without paying for a class.',
      tags: ['outdoors', 'fitness', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/outdoor-gyms',
      linkLabel: 'See outdoor gyms',
      mapQuery: 'Brent, London'
    },
    {
      id: 'act-barham-park',
      section: 'activities',
      name: 'Barham Park',
      age: 'all ages',
      cost: 'free',
      area: 'Sudbury',
      blurb: 'Park with a play area, walled garden, walking route, and outdoor gym.',
      recommendation: 'Good lower-key park choice if you want space without a big outing.',
      tags: ['park', 'playground', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/barham-park',
      linkLabel: 'Open park page',
      mapQuery: 'Barham Park, London'
    },
    {
      id: 'act-fryent-country-park',
      section: 'activities',
      name: 'Fryent Country Park',
      age: 'all ages',
      cost: 'free',
      area: 'Kingsbury',
      blurb: 'Large open countryside-style park with walking, wildlife, and more room to roam.',
      recommendation: 'Best if you want a proper nature walk rather than a neighbourhood green.',
      tags: ['park', 'nature', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/fryent-country-park',
      linkLabel: 'Open park page',
      mapQuery: 'Fryent Country Park, London'
    },
    {
      id: 'act-welsh-harp-open-space',
      section: 'activities',
      name: 'Welsh Harp Open Space',
      age: 'all ages',
      cost: 'free',
      area: 'Brent Reservoir',
      blurb: 'Waterfront open space with room for walks, wildlife, and a longer outdoor reset.',
      recommendation: 'Good if your family likes bigger, more open landscapes.',
      tags: ['park', 'water', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/welsh-harp-open-space',
      linkLabel: 'Open park page',
      mapQuery: 'Welsh Harp Open Space, London'
    },
    {
      id: 'act-neasden-recreation-ground',
      section: 'activities',
      name: 'Neasden Recreation Ground',
      age: 'all ages',
      cost: 'free',
      area: 'Neasden',
      blurb: 'Simple playground-and-green-space option with an outdoor gym and room to run around.',
      recommendation: 'Useful if you want something easy and close to home.',
      tags: ['park', 'playground', 'free'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/parks-and-open-spaces/park-finder/neasden-recreation-ground',
      linkLabel: 'Open park page',
      mapQuery: 'Neasden Recreation Ground, London'
    },
    {
      id: 'act-brent-dolphins-willesden',
      section: 'activities',
      name: 'Brent Dolphins Swimming Club at Willesden',
      age: 'all ages',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Swimming club sessions at Willesden Sports Centre with set times across the week.',
      recommendation: 'Best if you want a club atmosphere as well as lessons.',
      tags: ['swim', 'club', 'lessons'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/brent-dolphins-swimming-club-at-willesden',
      linkLabel: 'View club',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-brent-dolphins-vale-farm',
      section: 'activities',
      name: 'Brent Dolphins Swimming Club at Vale Farm',
      age: 'all ages',
      cost: 'mid',
      area: 'Sudbury',
      blurb: 'Second Brent Dolphins training base with explicit weekly sessions at Vale Farm.',
      recommendation: 'Useful if Vale Farm is the easier travel option.',
      tags: ['swim', 'club', 'lessons'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/brent-dolphins-swimming-club-at-vale-farm',
      linkLabel: 'View club',
      mapQuery: 'Vale Farm Sports Centre, London'
    },
    {
      id: 'act-wu-shu-kwan',
      section: 'activities',
      name: 'Wu Shu Kwan',
      age: 'all ages',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Martial arts classes at Willesden Sports Centre with a clear weekly structure.',
      recommendation: 'Good if you want a disciplined class rather than casual play.',
      tags: ['martial arts', 'class', 'weekly'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/wu-shu-kwan',
      linkLabel: 'View listing',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-track-academy',
      section: 'activities',
      name: 'Track Academy',
      age: 'all ages',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Athletics-style club with year-round sessions and holiday coverage at Willesden Sports Centre.',
      recommendation: 'Useful if your child likes running, jumping, and structured sport.',
      tags: ['athletics', 'sport', 'weekly'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/track-academy',
      linkLabel: 'View listing',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-mg-gymstars',
      section: 'activities',
      name: 'MG Gymstars',
      age: 'all ages',
      cost: 'mid',
      area: 'Willesden / Vale Farm',
      blurb: 'Gymnastics classes and training across Willesden and Vale Farm.',
      recommendation: 'Strong if your child likes tumbling and balance work.',
      tags: ['gymnastics', 'class', 'sport'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/mg-gymstars',
      linkLabel: 'View listing',
      mapQuery: 'Vale Farm Sports Centre, London'
    },
    {
      id: 'act-alis-dojang',
      section: 'activities',
      name: "Ali's Dojang at Moberly Sports Centre",
      age: 'all ages',
      cost: 'mid',
      area: 'Moberly',
      blurb: 'Taekwondo classes for kids and adults with a clear weekday timetable.',
      recommendation: 'Good if you want a martial arts class with proper structure.',
      tags: ['martial arts', 'taekwondo', 'class'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/ali-s-dojang',
      linkLabel: 'View listing',
      mapQuery: 'Moberly Sports Centre, London'
    },
    {
      id: 'act-maiwand-martial-arts',
      section: 'activities',
      name: 'Maiwand Martial Arts',
      age: 'all ages',
      cost: 'mid',
      area: 'Roundwood',
      blurb: 'Martial arts classes at Roundwood Youth Centre with an evening timetable.',
      recommendation: 'Useful if you want a local weekday evening class.',
      tags: ['martial arts', 'class', 'weekly'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/maiwand-martial-arts',
      linkLabel: 'View listing',
      mapQuery: 'Roundwood Youth Centre, London'
    },
    {
      id: 'act-young-football-school',
      section: 'activities',
      name: 'Young’s Football Coaching School',
      age: '5–12',
      cost: 'mid',
      area: 'Brent',
      blurb: 'Saturday football coaching for younger children, with a straightforward age range.',
      recommendation: 'Handy if you want football with a clear weekly slot.',
      tags: ['football', 'sport', 'class'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/young-s-football-coaching-school',
      linkLabel: 'View listing',
      mapQuery: 'Ark Academy, Brent, London'
    },
    {
      id: 'act-play-with-your-sole',
      section: 'activities',
      name: 'Play With your Sole FC',
      age: 'all ages',
      cost: 'mid',
      area: 'Brent',
      blurb: 'Age-banded football sessions with clear time blocks and venue detail.',
      recommendation: 'Good if you want football without a huge travel radius.',
      tags: ['football', 'sport', 'class'],
      contact: 'https://www.brent.gov.uk/parks-leisure-and-healthy-living/sports-clubs-and-activities/sport-activity-finder/play-with-your-sole-fc',
      linkLabel: 'View listing',
      mapQuery: 'Brent, London'
    },
    {
      id: 'act-jason-roberts-foundation',
      section: 'activities',
      name: 'The Jason Roberts Foundation',
      age: '5+',
      cost: 'free',
      area: 'Stonebridge',
      blurb: 'Weekly multi-sports and football sessions plus half-term and summer holiday activity.',
      recommendation: 'Excellent if you want a social, active option that is also low-cost.',
      tags: ['football', 'multi-sport', 'free'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/send-local-offer/send-local-offer-directory/the-jason-roberts-foundation',
      linkLabel: 'View listing',
      mapQuery: 'Stonebridge, London'
    },
    {
      id: 'act-rsbc-sports-club',
      section: 'activities',
      name: 'RSBC sports club at Willesden Sports Centre',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden',
      blurb: 'Monthly sports club for blind and partially sighted children and young people with a mix of games.',
      recommendation: 'Very useful if you need a more supported inclusive sports option.',
      tags: ['SEND', 'sport', 'free'],
      contact: 'https://www.brent.gov.uk/children-young-people-and-families/send-local-offer/send-local-offer-directory/royal-society-for-blind-children-sports-club-at-willesden-sports-centre',
      linkLabel: 'View listing',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10'
    },
    {
      id: 'act-2-da-stage',
      section: 'activities',
      name: '2 Da Stage Performing Arts & Childcare Club',
      age: '5–11',
      cost: 'mid',
      area: 'Wembley',
      blurb: 'Drama, dance, singing, and music-led performing arts sessions with holiday playscheme coverage.',
      recommendation: 'Best if you want a polished arts option with a clear school-holiday offer.',
      tags: ['performing arts', 'dance', 'music'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/2-da-stage-performing-arts-and-childcare-club',
      linkLabel: 'View listing',
      mapQuery: 'Wembley, London'
    },
    {
      id: 'act-blue-ocean-waves',
      section: 'activities',
      name: 'Blue Ocean Waves',
      age: 'children and young people',
      cost: 'free',
      area: 'Wembley / Chalkhill',
      blurb: 'Music, vocals, dance, drama, art, and yoga for children and young people, including disabled young people.',
      recommendation: 'Good if you want a broad creative offer with an inclusive feel.',
      tags: ['performing arts', 'music', 'dance'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/blue-ocean-waves',
      linkLabel: 'View listing',
      mapQuery: 'Chalkhill, Wembley, London'
    },
    {
      id: 'act-brent-youth-theatre',
      section: 'activities',
      name: 'Brent Youth Theatre',
      age: '7–11',
      cost: 'free',
      area: 'Wembley',
      blurb: 'Weekly inclusive performing arts sessions for younger children.',
      recommendation: 'Strong local pick for kids who like theatre and performance.',
      tags: ['theatre', 'drama', 'free'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/brent-youth-theatre',
      linkLabel: 'View listing',
      mapQuery: 'Wembley, London'
    },
    {
      id: 'act-concrete-canvas-arts',
      section: 'activities',
      name: 'Concrete Canvas Arts',
      age: 'up to 25',
      cost: 'free',
      area: 'Kilburn',
      blurb: 'Youth arts, drama, music-making, filmmaking, fashion, journalism, sports, and leadership.',
      recommendation: 'Best for older children and teens who want a broader creative programme.',
      tags: ['arts', 'creative', 'youth'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/concrete-canvas-arts',
      linkLabel: 'View listing',
      mapQuery: 'Kilburn, London'
    },
    {
      id: 'act-abundance-arts',
      section: 'activities',
      name: 'Abundance Arts',
      age: 'all ages',
      cost: 'free',
      area: 'Stonebridge',
      blurb: 'African drumming, storytelling, dance, and visual arts with a strong community identity.',
      recommendation: 'Useful if you want something creative and rooted in the neighbourhood.',
      tags: ['arts', 'music', 'dance'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/abundance-arts',
      linkLabel: 'View listing',
      mapQuery: 'Stonebridge, London'
    },
    {
      id: 'act-margaret-dance-academy',
      section: 'activities',
      name: 'Margaret Dance Academy / Roundwood Stage School',
      age: '2.5+',
      cost: 'varies',
      area: 'Willesden',
      blurb: 'Ballet, modern, theatre, musical theatre, jazz, street, hip hop, and tap for a wide age range.',
      recommendation: 'Good if you want a well-rounded dance school with lots of style choice.',
      tags: ['dance', 'ballet', 'theatre'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/margaret-dance-academy-roundwood-stage-school',
      linkLabel: 'View listing',
      mapQuery: 'Willesden, London'
    },
    {
      id: 'act-london-irish-music-school',
      section: 'activities',
      name: 'London Irish Music School',
      age: '6+',
      cost: 'varies',
      area: 'Kingsbury',
      blurb: 'Traditional Irish music lessons on Saturdays.',
      recommendation: 'Useful if your child wants a regular music lesson rather than a one-off activity.',
      tags: ['music', 'class', 'weekly'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/london-irish-music-school',
      linkLabel: 'View listing',
      mapQuery: 'Kingsbury, London'
    },
    {
      id: 'act-brent-music-service',
      section: 'activities',
      name: 'Brent Music Service',
      age: '11–19',
      cost: 'varies',
      area: 'Brent',
      blurb: 'Instrumental and vocal tuition, ensembles, and choirs across Brent.',
      recommendation: 'Good if you want proper progression beyond a starter class.',
      tags: ['music', 'class', 'ensembles'],
      contact: 'https://www.brent.gov.uk/education-schools-and-learning/brent-music-service',
      linkLabel: 'View music service',
      mapQuery: 'Brent, London'
    },
    {
      id: 'act-kalaniketan',
      section: 'activities',
      name: 'Kalaniketan',
      age: 'all ages',
      cost: 'varies',
      area: 'Brent',
      blurb: 'Indian dance classes plus harmonium, satar, tabla, and vocal singing.',
      recommendation: 'Good if you want a strong cultural arts option.',
      tags: ['dance', 'music', 'arts'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/kalaniketan',
      linkLabel: 'View listing',
      mapQuery: 'Brent, London'
    },
    {
      id: 'act-kiln-theatre-young-people',
      section: 'activities',
      name: 'Kiln Theatre – Creative Engagement / Young People',
      age: '7+',
      cost: 'varies',
      area: 'Kilburn',
      blurb: 'Theatre-making, youth outreach, young company work, and youth theatre offers.',
      recommendation: 'Useful if you want a higher-quality theatre pathway nearby.',
      tags: ['theatre', 'drama', 'youth'],
      contact: 'https://kilntheatre.com/creative-engagement',
      linkLabel: 'View programme',
      mapQuery: 'Kiln Theatre, Kilburn, London'
    },
    {
      id: 'act-salusbury-world',
      section: 'activities',
      name: 'Salusbury World',
      age: 'all ages',
      cost: 'free',
      area: 'Queen’s Park',
      blurb: 'After-school and holiday clubs plus workshops and film club.',
      recommendation: 'Good if you want a community-based option with some variety.',
      tags: ['club', 'holiday', 'free'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/salusbury-world',
      linkLabel: 'View listing',
      mapQuery: 'Queen’s Park, London'
    },
    {
      id: 'act-sklpc-saturday-school',
      section: 'activities',
      name: 'SKLPC Saturday School',
      age: '3.5–18',
      cost: 'varies',
      area: 'Kenton',
      blurb: 'Weekend school with Hinduism, English, maths, Bollywood dancing, coding, Gujarati, and Bharatanatyam.',
      recommendation: 'Good if you want a mix of cultural learning and academic support.',
      tags: ['Saturday school', 'dance', 'coding'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/shree-kutch-leva-patel-community-sklpc-saturday-school',
      linkLabel: 'View listing',
      mapQuery: 'Kenton, London'
    },
    {
      id: 'act-edsg-harlesden-saturday-school',
      section: 'activities',
      name: 'Education and Skills Development Group (Harlesden Saturday School)',
      age: '7–16',
      cost: 'varies',
      area: 'Harlesden',
      blurb: 'Saturday learning with English, maths, science, and homework support.',
      recommendation: 'Useful if you want structured educational support alongside activities.',
      tags: ['Saturday school', 'learning', 'homework'],
      contact: 'https://www.brent.gov.uk/neighbourhoods-and-communities/community-directory/education-and-skills-development-group-harlesden-saturday-school',
      linkLabel: 'View listing',
      mapQuery: 'Harlesden, London'
    },
    {
      id: 'act-global-skills-centre',
      section: 'activities',
      name: 'Global Skills Centre',
      age: '8–16',
      cost: 'varies',
      area: 'South Kilburn',
      blurb: 'STEM-focused programme with robotics, coding, apps design, 3D design, and programming.',
      recommendation: 'Best if you want a stronger STEM option than a basic club.',
      tags: ['STEM', 'coding', 'class'],
      contact: 'https://www.brent.gov.uk/jobs-training-and-skills/employment-and-enterprise-directory/global-skills-centre',
      linkLabel: 'View listing',
      mapQuery: 'South Kilburn, London'
    },
    {
      id: 'act-jag-salusbury-primary',
      section: 'activities',
      name: 'Junior Adventures Group — Salusbury Primary School',
      age: '4–11',
      cost: 'mid',
      area: 'Queen’s Park',
      blurb: 'Wraparound and holiday club provision with booking availability shown live.',
      recommendation: 'Useful if you want a school-based after-school or holiday option.',
      tags: ['holiday club', 'wraparound', 'school'],
      contact: 'https://www.junioradventuresgroup.co.uk/find-us/salusbury-primary-school',
      linkLabel: 'View club page',
      mapQuery: 'Salusbury Primary School, London NW6 6RG'
    }
  ],
  pubs: [
    {
      id: 'pub-alice-house',
      section: 'pubs',
      name: 'The Alice House',
      age: 'all ages',
      cost: 'mid',
      area: 'Queen\'s Park',
      blurb: 'Gastropub with a large beer garden at the back — one of the most family-friendly spots on Salusbury Road. High chairs, changing facilities, and a relaxed weekend vibe where nobody blinks at a toddler uprising. Good Sunday roasts.',
      recommendation: 'Best all-rounder for families in Queen\'s Park — big garden, great food, genuinely welcoming staff.',
      tags: ['beer garden', 'gastropub', 'sunday roast', 'changing facilities', 'salusbury road'],
      contact: 'https://www.thealicehouse.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'The Alice House, 53-55 Salusbury Road, London NW6 6NJ',
      promoImage: 'https://images.unsplash.com/photo-1571071627962-b100cdd80b50?w=800&h=450&fit=crop&auto=format',
      featured: true
    },
    {
      id: 'pub-salusbury',
      section: 'pubs',
      name: 'The Salusbury',
      age: 'all ages',
      cost: 'high',
      area: 'Queen\'s Park',
      blurb: 'Wine bar-meets-gastropub with a continental feel. Kids are genuinely welcome — not just tolerated. The deli counter and bakery make it an easy stop any time of day, and the outdoor tables on Salusbury Road are prime parent-watching territory.',
      recommendation: 'Perfect for a civilised lunch where you actually get to finish your meal while the kids colour.',
      tags: ['gastropub', 'wine bar', 'deli', 'outdoor seating', 'salusbury road'],
      contact: 'https://www.thesalusbury.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'The Salusbury, 50 Salusbury Road, London NW6 6NN',
      promoImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'pub-gallery',
      section: 'pubs',
      name: 'The Gallery',
      age: 'all ages',
      cost: 'mid',
      area: 'West Hampstead',
      blurb: 'Spacious gastropub on Broadhurst Gardens with a large beer garden that fills with families at weekends. The garden is the main draw — plenty of room for buggies and wandering toddlers. Solid pub food menu with kids\' options.',
      recommendation: 'The garden is the star here — one of the biggest in the area and properly set up for families.',
      tags: ['beer garden', 'gastropub', 'kids menu', 'west hampstead'],
      contact: 'https://www.thegallerynw6.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'The Gallery, 190 Broadhurst Gardens, London NW6 3AY',
      promoImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'pub-black-lion',
      section: 'pubs',
      name: 'The Black Lion',
      age: 'all ages',
      cost: 'mid',
      area: 'Kensal Rise / West Hampstead',
      blurb: 'Beautifully renovated pub on West End Lane with a large beer garden. Dogs and kids equally welcome. The garden is a suntrap in summer and the menu covers everything from proper roasts to burgers. High chairs available.',
      recommendation: 'The garden is a proper suntrap — great for a lazy weekend afternoon with the family.',
      tags: ['beer garden', 'gastropub', 'sunday roast', 'west end lane'],
      contact: 'https://www.theblacklionnw6.com/',
      linkLabel: 'Visit website',
      mapQuery: 'The Black Lion, 295 West End Lane, London NW6 1RD',
      promoImage: 'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'pub-old-bell',
      section: 'pubs',
      name: 'The Old Bell',
      age: 'all ages',
      cost: 'mid',
      area: 'Kilburn',
      blurb: 'Gastropub on Willesden Lane with a relaxed beer garden. One of those places where families, after-work drinks, and Sunday roasts all coexist without friction. Baby change facilities and high chairs.',
      recommendation: 'Solid local that handles the full spectrum — quiet weekday lunch to busy Sunday roast — without ever feeling like kids aren\'t welcome.',
      tags: ['beer garden', 'gastropub', 'sunday roast', 'changing facilities', 'kilburn'],
      contact: 'https://www.theoldbellkilburn.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'The Old Bell, 38 Willesden Lane, London NW6 7ST',
      promoImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'pub-freemasons-arms',
      section: 'pubs',
      name: 'The Freemasons Arms',
      age: 'all ages',
      cost: 'mid',
      area: 'Hampstead',
      blurb: 'Right next to Hampstead Heath with a huge beer garden — the textbook post-Heath-walk family pub. The garden is enormous and very relaxed, with plenty of space for kids to run around. Menu covers pub classics, pizzas, and kids\' portions.',
      recommendation: 'The ultimate family pub for a Heath day — massive garden, zero pretension, everyone\'s there for the same reason.',
      tags: ['beer garden', 'hampstead heath', 'pub food', 'outdoor', 'large garden'],
      contact: 'https://www.freemasonsarmshampstead.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'Freemasons Arms, 32 Downshire Hill, London NW3 1NT',
      promoImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=450&fit=crop&auto=format',
      featured: true
    },
    {
      id: 'pub-spaniards-inn',
      section: 'pubs',
      name: 'The Spaniards Inn',
      age: 'all ages',
      cost: 'high',
      area: 'Hampstead',
      blurb: 'Historic 16th-century pub with one of the biggest and loveliest beer gardens in North London. Right on the edge of the Heath. Extremely family-friendly — the garden is practically a village green. Keats and Dickens drank here; now it\'s mostly parents with buggies.',
      recommendation: 'Worth the trip for the garden alone — feels like a country pub in the middle of London. Perfect summer destination.',
      tags: ['beer garden', 'historic', 'hampstead heath', 'large garden', 'destination pub'],
      contact: 'https://www.thespaniardshampstead.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'Spaniards Inn, Spaniards Road, London NW3 7JJ',
      promoImage: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=450&fit=crop&auto=format',
      featured: true
    },
    {
      id: 'pub-crown-cricklewood',
      section: 'pubs',
      name: 'The Crown',
      age: 'all ages',
      cost: 'low',
      area: 'Cricklewood',
      blurb: 'Big pub on Cricklewood Broadway with a decent outdoor area and a properly family-friendly attitude. More of a traditional pub feel than the gastropubs — affordable, unpretentious, and the kind of place where nobody minds a bit of noise.',
      recommendation: 'Best value family pub in the area — no gastropub mark-up, just honest pub food in a welcoming space.',
      tags: ['beer garden', 'traditional', 'affordable', 'cricklewood'],
      contact: 'https://www.crowncricklewood.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'The Crown, Cricklewood Broadway, London NW2 3ED',
      promoImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=450&fit=crop&auto=format'
    }
  ],

  indoor: [
    {
      id: 'indoor-willesden-library',
      section: 'indoor',
      name: 'The Library at Willesden Green',
      age: 'all ages',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'Modern library with a dedicated children\'s floor, regular storytelling sessions, craft workshops, and a café. The open-plan kids\' area has plenty of space for buggies, and the lift makes it fully accessible. Free Wi-Fi and comfortable seating for parents too.',
      recommendation: 'Your default rainy-day fallback — warm, welcoming, free, and open seven days a week. Kids never get bored here.',
      tags: ['library', 'free', 'storytelling', 'craft', 'indoor', 'café', 'accessible'],
      contact: 'https://www.brent.gov.uk/libraries',
      linkLabel: 'Brent libraries',
      mapQuery: 'The Library at Willesden Green, 95 High Road, NW10 2SF',
      promoImage: 'https://images.unsplash.com/photo-1507842217343-583bb4565c69?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-raf-museum',
      section: 'indoor',
      name: 'Royal Air Force Museum',
      age: 'all ages',
      cost: 'free',
      area: 'Colindale',
      blurb: 'Huge free museum with over 100 aircraft, interactive exhibits, a 4D cinema experience, and an outdoor playground. The kids\' zone lets children climb into cockpits and try flight simulators. Café on site. Easy to spend 3–4 hours here without spending a penny.',
      recommendation: 'Massive, free, and genuinely fascinating for all ages — from toddlers transfixed by helicopters to older kids who love the hands-on exhibits.',
      tags: ['museum', 'free', 'indoor', 'planes', 'interactive', 'playground'],
      contact: 'https://www.rafmuseum.org.uk/london/',
      linkLabel: 'Visit RAF Museum',
      mapQuery: 'RAF Museum London, Grahame Park Way, London NW9 5LL',
      promoImage: 'https://images.unsplash.com/photo-1559060018-6153ad18ec53?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-science-museum',
      section: 'indoor',
      name: 'Worth the trip: Science Museum',
      age: '3–12',
      cost: 'free',
      area: 'South Kensington',
      blurb: 'World-class museum with The Garden (a dedicated under-5s sensory play space), Pattern Pod for younger children, Wonderlab for hands-on experiments, and the iconic space gallery. Free entry but some galleries need timed tickets. About 20 minutes on the Jubilee line.',
      recommendation: 'Worth the Tube ride. Book the Wonderlab in advance — it\'s the highlight for kids 7+ and worth the small extra charge.',
      tags: ['museum', 'free', 'indoor', 'science', 'interactive', 'central london'],
      contact: 'https://www.sciencemuseum.org.uk/',
      linkLabel: 'Visit Science Museum',
      mapQuery: 'Science Museum, Exhibition Road, London SW7 2DD',
      promoImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-natural-history',
      section: 'indoor',
      name: 'Worth the trip: Natural History Museum',
      age: 'all ages',
      cost: 'free',
      area: 'South Kensington',
      blurb: 'Dinosaurs, earthquakes, volcanoes, and a life-size blue whale suspended from the ceiling. The dinosaur gallery alone justifies the trip. The Investigate centre lets kids handle real specimens. Quiet early mornings (first hour) if your child finds crowds overwhelming.',
      recommendation: 'The dinosaur queue moves fast and is utterly worth it. Go straight there when you arrive — it gets busiest by midday.',
      tags: ['museum', 'free', 'dinosaurs', 'indoor', 'central london', 'sensory'],
      contact: 'https://www.nhm.ac.uk/',
      linkLabel: 'Visit NHM',
      mapQuery: 'Natural History Museum, Cromwell Road, London SW7 5BD',
      promoImage: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-clip-n-climb',
      section: 'indoor',
      name: 'Worth the trip: Clip \'n Climb Chelsea',
      age: '4+',
      cost: 'mid',
      area: 'Chelsea',
      blurb: 'Colourful themed climbing walls designed specifically for kids — no experience needed. Auto-belay systems mean they climb independently while you watch. Book a 90-minute session. There\'s also a soft-play area for younger siblings. Café with decent coffee.',
      recommendation: 'Brilliant for burning off energy when it\'s pouring. Book weekend slots at least a week ahead — they fill up fast.',
      tags: ['climbing', 'active', 'indoor', 'booking required'],
      contact: 'https://www.clipnclimbchelsea.co.uk/',
      linkLabel: 'Book a session',
      mapQuery: 'Clip n Climb Chelsea, 19 Michael Road, London SW6 2ER',
      promoImage: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-soft-play-cricklewood',
      section: 'indoor',
      name: 'Jump In! Trampoline Park Cricklewood',
      age: '4–12',
      cost: 'low',
      area: 'Cricklewood',
      blurb: 'Large indoor trampoline park with interconnected trampolines, foam pits, dodgeball courts, and a dedicated toddler zone. Great energy-burner for rainy days — kids bounce, you sit in the café with proper coffee and Wi-Fi. Grip socks required (available to buy).',
      recommendation: 'The toddler zone (weekdays before 11am) is quieter and cheaper. Great birthday party venue too.',
      tags: ['trampoline', 'indoor', 'active', 'café', 'party venue'],
      contact: 'https://www.gojumpin.com/',
      linkLabel: 'Visit website',
      mapQuery: 'Jump In Cricklewood, 158 Cricklewood Broadway, London NW2 3ED',
      promoImage: 'https://images.unsplash.com/photo-1596895111956-bf1cf84b1e2b?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-london-transport',
      section: 'indoor',
      name: 'Worth the trip: London Transport Museum',
      age: '2–10',
      cost: 'mid',
      area: 'Covent Garden',
      blurb: 'Every vehicle-obsessed child\'s dream. Kids can climb aboard real buses, sit in a Tube driver\'s cab, and explore a hands-on play zone. Under-18s go free. The museum shop is dangerous (in a good way). Annual pass costs the same as a day ticket.',
      recommendation: 'If your child is going through a bus/Tube/train phase, this is basically Disneyland. Annual pass pays for itself on the second visit.',
      tags: ['museum', 'transport', 'interactive', 'indoor', 'central london'],
      contact: 'https://www.ltmuseum.co.uk/',
      linkLabel: 'Visit LTM',
      mapQuery: 'London Transport Museum, Covent Garden Piazza, London WC2E 7BB',
      promoImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-swiss-cottage-leisure',
      section: 'indoor',
      name: 'Swiss Cottage Leisure Centre',
      age: 'all ages',
      cost: 'low',
      area: 'Swiss Cottage',
      blurb: 'Council-run leisure centre with a dedicated family swimming pool (warmer than the main pool), splash features, a soft-play area, and crèche. Swimming lessons available. Pay-as-you-go — no membership needed. About 15 minutes on the Jubilee line.',
      recommendation: 'The family pool with the pirate ship feature is fantastic for toddlers — warm, shallow, and always supervised.',
      tags: ['swimming', 'soft play', 'indoor', 'active', 'affordable'],
      contact: 'https://www.better.org.uk/leisure-centre/london/camden/swiss-cottage-leisure-centre',
      linkLabel: 'Visit Better',
      mapQuery: 'Swiss Cottage Leisure Centre, Adelaide Road, London NW3 3NF',
      promoImage: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-cinema-kids-club',
      section: 'indoor',
      name: 'Kids\' Club at Everyman Cinema',
      age: '2–8',
      cost: 'low',
      area: 'Hampstead / Maida Vale',
      blurb: 'Everyman cinemas run weekend morning Kids\' Clubs with recent family films at reduced prices. Sofa seating, blankets, and you can bring snacks. Low volume and the lights stay dim rather than off — perfect for first-time cinema-goers. Check local listings for times.',
      recommendation: 'The Everyman Maida Vale and Hampstead both participate. Saturday 10am slots. Book ahead — popular films sell out.',
      tags: ['cinema', 'weekend', 'indoor', 'relaxed', 'booking needed'],
      contact: 'https://www.everymancinema.com/',
      linkLabel: 'Everyman listings',
      mapQuery: 'Everyman Maida Vale, 215 Sutherland Avenue, London W9 1RU',
      promoImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'indoor-ark-softplay',
      section: 'indoor',
      name: 'The Ark Soft Play',
      age: '0–8',
      cost: 'low',
      area: 'West Hampstead',
      blurb: 'Clean, well-maintained soft-play centre near West Hampstead with a large frame, separate baby area, and a café serving decent food (not just crisps and squash). Free on-street parking nearby on weekends. Pre-booking recommended during school holidays.',
      recommendation: 'Slightly pricier than Jump In but noticeably cleaner and calmer — worth the extra if you want a less hectic experience.',
      tags: ['soft play', 'indoor', 'café', 'toddler', 'baby area'],
      contact: 'https://www.thearksoftplay.co.uk/',
      linkLabel: 'Visit The Ark',
      mapQuery: 'The Ark Soft Play, 242 West End Lane, London NW6 1LG',
      promoImage: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=450&fit=crop&auto=format'
    }
  ],

  send: [
    {
      id: 'send-brent-sendiass',
      section: 'send',
      name: 'Brent SENDIASS',
      age: '0–25',
      cost: 'free',
      area: 'Brent-wide',
      blurb: 'Brent Council\'s free, impartial SEND information, advice and support service. They help with EHCP applications, school placements, tribunal appeals, and understanding your child\'s rights. Phone and email support available. They can attend school meetings with you.',
      recommendation: 'Your first call for any SEND-related question in Brent. Free, confidential, and genuinely knowledgeable about local provision.',
      tags: ['SEND', 'free', 'EHCP', 'advice', 'Brent', 'advocacy'],
      contact: 'https://www.brent.gov.uk/sendiass',
      linkLabel: 'Brent SENDIASS',
      mapQuery: 'Brent Civic Centre, Engineers Way, Wembley HA9 0FJ'
    },
    {
      id: 'send-brent-parent-carer',
      section: 'send',
      name: 'Brent Parent Carer Forum',
      age: 'all ages',
      cost: 'free',
      area: 'Brent-wide',
      blurb: 'Parent-led group for families of children with SEND in Brent. They run coffee mornings, training sessions, and actively feed into council decision-making about local SEND services. A great way to meet other parents who understand, and to have your voice heard on local provision.',
      recommendation: 'Invaluable for feeling less alone. Their WhatsApp group is particularly active and supportive.',
      tags: ['SEND', 'parent support', 'Brent', 'community', 'free'],
      contact: 'https://www.brentpcf.org/',
      linkLabel: 'Brent PCF',
      mapQuery: 'Brent, London'
    },
    {
      id: 'send-contact-charity',
      section: 'send',
      name: 'Contact — for families with disabled children',
      age: '0–25',
      cost: 'free',
      area: 'National',
      blurb: 'The main UK charity for families with disabled children. Free helpline for benefits advice, EHCP support, emotional support, and practical guidance. They also run local workshops and have a directory of parent carer forums across the country.',
      recommendation: 'Their helpline (0808 808 3555) is staffed by parent carers who\'ve been through it themselves — they actually get it.',
      tags: ['SEND', 'charity', 'helpline', 'benefits', 'national'],
      contact: 'https://www.contact.org.uk/',
      linkLabel: 'Contact charity',
      mapQuery: 'Contact, Wenlock Road, London N1 7GT'
    },
    {
      id: 'send-ipsea',
      section: 'send',
      name: 'IPSEA — SEND legal advice',
      age: '0–25',
      cost: 'free',
      area: 'National',
      blurb: 'Independent Provider of Special Education Advice. Free legally-based advice on getting the right education for children with SEND. They offer a tribunal helpline, online resources covering every EHCP stage, and can recommend education lawyers if needed.',
      recommendation: 'Essential if you\'re heading toward tribunal or the LA is pushing back on provision. Their template letters are gold.',
      tags: ['SEND', 'legal', 'EHCP', 'tribunal', 'free', 'national'],
      contact: 'https://www.ipsea.org.uk/',
      linkLabel: 'IPSEA website',
      mapQuery: 'IPSEA, Cambridge, UK'
    },
    {
      id: 'send-brent-mencap',
      section: 'send',
      name: 'Brent Mencap',
      age: 'all ages',
      cost: 'varies',
      area: 'Brent-wide',
      blurb: 'Local charity supporting people with learning disabilities and their families. They run youth clubs, Saturday activity sessions, holiday schemes, and family support groups. Also offer advice on benefits, transitions, and supported living for older teens and adults.',
      recommendation: 'Their holiday play schemes are a lifeline — book early as places fill up quickly each school holiday.',
      tags: ['SEND', 'learning disability', 'Brent', 'clubs', 'holiday'],
      contact: 'https://www.brentmencap.org.uk/',
      linkLabel: 'Brent Mencap',
      mapQuery: 'Brent Mencap, 379-381 High Road, London NW10 2JR'
    },
    {
      id: 'send-queens-park-inclusive',
      section: 'send',
      name: 'Inclusive Play Sessions at Queen\'s Park',
      age: '0–12',
      cost: 'free',
      area: 'Queen\'s Park',
      blurb: 'Queen\'s Park runs regular inclusive play sessions with trained staff, sensory equipment, and smaller group sizes. The playground itself has accessible equipment including a wheelchair-accessible roundabout and sensory planting areas. Contact the park office for session times.',
      recommendation: 'The sensory garden near the café is a hidden gem — quieter than the main playground and beautifully planted.',
      tags: ['SEND', 'inclusive', 'play', 'park', 'free', 'queens park'],
      contact: 'https://www.cityoflondon.gov.uk/things-to-do/green-spaces/queens-park',
      linkLabel: 'Queen\'s Park',
      mapQuery: 'Queen\'s Park, Harvist Road, London NW6 6SG'
    },
    {
      id: 'send-swimming-send',
      section: 'send',
      name: 'SEND-friendly swimming sessions',
      age: 'all ages',
      cost: 'low',
      area: 'Brent-wide',
      blurb: 'Brent leisure centres (Willesden Sports Centre, Vale Farm) run dedicated SEND swimming sessions with reduced numbers, warmer water, quiet environment (no whistles or loud music), and pool hoists. Check the Better UK app for the timetable — sessions book up quickly.',
      recommendation: 'Sunday mornings at Vale Farm tend to be quietest. Call ahead to discuss any specific access needs.',
      tags: ['SEND', 'swimming', 'sensory-friendly', 'Brent', 'accessible'],
      contact: 'https://www.better.org.uk/',
      linkLabel: 'Better UK app',
      mapQuery: 'Willesden Sports Centre, Donnington Road, London NW10 3QX'
    },
    {
      id: 'send-autism-brent',
      section: 'send',
      name: 'Brent Autism Service',
      age: '0–18',
      cost: 'free',
      area: 'Brent-wide',
      blurb: 'NHS service providing autism assessments, post-diagnosis support, and parenting programmes for families in Brent. They run the EarlyBird and Cygnet programmes — evidence-based courses that help parents understand autism and develop practical strategies.',
      recommendation: 'Referral is through your GP or school SENCO. Waiting times can be long, so get on the list early.',
      tags: ['SEND', 'autism', 'NHS', 'Brent', 'assessment', 'free'],
      contact: 'https://www.cnwl.nhs.uk/services/child-and-adolescent-mental-health-services/brent-autism-service',
      linkLabel: 'CNWL website',
      mapQuery: 'Brent CAMHS, London'
    },
    {
      id: 'send-sensory-room',
      section: 'send',
      name: 'Sensory Room at Willesden Library',
      age: '0–12',
      cost: 'free',
      area: 'Willesden Green',
      blurb: 'The Willesden Green Library has a small sensory room with bubble tubes, fibre optics, soft play shapes, and calming music. Bookable in 45-minute slots. Particularly useful for children who find the main library floor overstimulating. Ring ahead to book.',
      recommendation: 'Quiet, calm, and free — book the first or last slot of the day for the most peaceful experience.',
      tags: ['SEND', 'sensory', 'free', 'library', 'calm', 'willesden'],
      contact: 'https://www.brent.gov.uk/libraries',
      linkLabel: 'Book a slot',
      mapQuery: 'The Library at Willesden Green, 95 High Road, NW10 2SF'
    },
    {
      id: 'send-nasen',
      section: 'send',
      name: 'nasen — SEND teaching resources',
      age: '0–25',
      cost: 'free',
      area: 'National',
      blurb: 'National Association for Special Educational Needs. Mainly aimed at teachers and SENCOs, but their parent resources section is excellent — particularly the "Whole School SEND" guides, which explain what good SEND provision should look like in any school.',
      recommendation: 'Really useful when you\'re evaluating schools — gives you a checklist of what proper SEND support should include.',
      tags: ['SEND', 'education', 'resources', 'national', 'free'],
      contact: 'https://www.nasen.org.uk/',
      linkLabel: 'nasen website',
      mapQuery: 'nasen, Tamworth, UK'
    }
  ],

  activities: [
    {
      id: 'act-swiss-cottage-swim',
      section: 'activities',
      name: 'Swiss Cottage Leisure Centre — family swim',
      age: 'all ages',
      cost: 'low',
      area: 'Swiss Cottage',
      blurb: 'Council-run leisure centre with a dedicated family leisure pool featuring a pirate ship, water jets, and a shallow toddler area. Pay-as-you-go (£5 adults, £2.50 kids). Swimming lessons available from 6 months up. Clean changing rooms with family cubicles.',
      recommendation: 'The family pool is warmer than the main pool — crucial with toddlers. Go midweek mornings for a quieter session.',
      tags: ['swimming', 'active', 'toddler', 'affordable'],
      contact: 'https://www.better.org.uk/leisure-centre/london/camden/swiss-cottage-leisure-centre',
      linkLabel: 'Swiss Cottage',
      mapQuery: 'Swiss Cottage Leisure Centre, Adelaide Road, London NW3 3NF'
    },
    {
      id: 'act-capoeira-kensal',
      section: 'activities',
      name: 'Capoeira for Kids — Kensal Rise',
      age: '3–10',
      cost: 'low',
      area: 'Kensal Rise',
      blurb: 'Brazilian martial art combining movement, music, and play. Classes teach coordination, rhythm, and confidence in a non-competitive environment. No uniform required — just comfortable clothes. First class is a free taster. Saturdays during term time.',
      recommendation: 'Fantastic for building body confidence — the musical element keeps kids engaged in a way straight martial arts sometimes doesn\'t.',
      tags: ['capoeira', 'martial arts', 'music', 'active', 'kensal rise', 'term time'],
      contact: 'https://www.capoeira.co.uk/',
      linkLabel: 'Visit website',
      mapQuery: 'Kensal Rise, London NW10'
    },
    {
      id: 'act-queens-park-tennis',
      section: 'activities',
      name: 'Queen\'s Park Tennis Courts',
      age: '4+',
      cost: 'free',
      area: 'Queen\'s Park',
      blurb: 'Six free-to-use public tennis courts in Queen\'s Park. No booking — just turn up and play (30-minute limit if people are waiting). Bring your own rackets and balls. There\'s also a coaching provider on site offering paid lessons for kids from age 4.',
      recommendation: 'Rare free courts in London — go early on weekends (before 10am) to avoid the queue.',
      tags: ['tennis', 'free', 'queens park', 'active', 'outdoor'],
      contact: 'https://www.cityoflondon.gov.uk/things-to-do/green-spaces/queens-park',
      linkLabel: 'Queen\'s Park',
      mapQuery: 'Queen\'s Park Tennis Courts, Harvist Road, London NW6 6SG'
    },
    {
      id: 'act-football-little-kickers',
      section: 'activities',
      name: 'Little Kickers — Willesden',
      age: '1.5–7',
      cost: 'mid',
      area: 'Willesden Green',
      blurb: 'Football classes for preschool and early years children, focusing on fun and fundamental movement skills rather than competition. Classes grouped by age: Little Kicks (1.5–2.5), Junior Kickers (2.5–3.5), Mighty Kickers (3.5–5), Mega Kickers (5–7). Indoor venues in winter.',
      recommendation: 'The coaches are brilliant at engaging even the most reluctant toddlers. Free taster session available.',
      tags: ['football', 'active', 'toddler', 'preschool', 'term time'],
      contact: 'https://www.littlekickers.co.uk/',
      linkLabel: 'Little Kickers',
      mapQuery: 'Willesden Green, London NW10'
    },
    {
      id: 'act-gymnastics-willesden',
      section: 'activities',
      name: 'Willesden Gymnastics Club',
      age: '3–16',
      cost: 'mid',
      area: 'Willesden',
      blurb: 'Community gymnastics club running recreational and competitive sessions. Preschool classes (3–4) focus on basic movement, balance, and coordination. Older children progress through British Gymnastics badge levels. Term-time only. Trial session available.',
      recommendation: 'Excellent coaches — patient, encouraging, and safety-focused. The preschool sessions are particularly good.',
      tags: ['gymnastics', 'active', 'indoor', 'term time', 'willesden'],
      contact: 'https://www.british-gymnastics.org/',
      linkLabel: 'Find classes',
      mapQuery: 'Willesden, London NW10'
    },
    {
      id: 'act-dance-willesden',
      section: 'activities',
      name: 'Baby Ballet — Willesden Green',
      age: '2–5',
      cost: 'low',
      area: 'Willesden Green',
      blurb: 'Gentle introduction to dance and movement for toddlers and preschoolers. No uniform required — just comfortable clothes and bare feet or ballet shoes. Classes use stories, props, and music to teach basic positions and rhythm. Parent stays for the 2–3 age group.',
      recommendation: 'Sweet, low-pressure introduction to dance — no leotard pressure, just fun and music.',
      tags: ['dance', 'ballet', 'toddler', 'preschool', 'term time', 'willesden'],
      contact: 'https://www.babyballet.co.uk/',
      linkLabel: 'Baby Ballet',
      mapQuery: 'Willesden Green, London NW10'
    },
    {
      id: 'act-music-monkeys',
      section: 'activities',
      name: 'Monkey Music — Queen\'s Park',
      age: '0–4',
      cost: 'mid',
      area: 'Queen\'s Park',
      blurb: 'Award-winning music classes for babies and toddlers, grouped by age: Rock\'n\'Roll (3–12 months), Heigh-Ho (12–24 months), Jiggety-Jig (2–3 years), and Ding-Dong (3–4 years). Each class uses live instruments, singing, percussion, and movement. Term-time only.',
      recommendation: 'The teachers are musicians, not just enthusiasts — the quality shows. Free taster class if you\'re on the fence.',
      tags: ['music', 'baby', 'toddler', 'queens park', 'term time', 'singing'],
      contact: 'https://www.monkeymusic.co.uk/',
      linkLabel: 'Monkey Music',
      mapQuery: 'Queen\'s Park, London NW6'
    },
    {
      id: 'act-karate-willesden',
      section: 'activities',
      name: 'Karate Kids — Willesden',
      age: '5–14',
      cost: 'low',
      area: 'Willesden',
      blurb: 'Traditional Shotokan karate club with a dedicated children\'s programme. Focus on discipline, respect, and self-confidence alongside physical skills. Beginners welcome — first month is a trial period with no long-term commitment. Gradings held three times a year.',
      recommendation: 'Real emphasis on character development, not just punching. Great for building focus and self-discipline.',
      tags: ['karate', 'martial arts', 'active', 'confidence', 'term time', 'willesden'],
      contact: 'https://www.kuGB.org/',
      linkLabel: 'Find dojo',
      mapQuery: 'Willesden, London NW10'
    },
    {
      id: 'act-art-club-cricklewood',
      section: 'activities',
      name: 'Little Artists Club — Cricklewood',
      age: '3–8',
      cost: 'low',
      area: 'Cricklewood',
      blurb: 'Weekly art and craft club where kids explore different materials, techniques, and themes each term. Painting, clay, collage, printing — all the messy stuff you don\'t want to do at home. Smocks provided. Small groups (max 12) mean lots of individual attention.',
      recommendation: 'The end-of-term exhibition is genuinely lovely — kids are so proud of their work.',
      tags: ['art', 'creative', 'craft', 'messy play', 'cricklewood', 'term time'],
      contact: 'https://www.hoop.co.uk/search?q=art+club+cricklewood',
      linkLabel: 'Art classes',
      mapQuery: 'Cricklewood, London NW2'
    },
    {
      id: 'act-forest-school-queens-park',
      section: 'activities',
      name: 'Forest School at Queen\'s Park',
      age: '2–8',
      cost: 'mid',
      area: 'Queen\'s Park',
      blurb: 'Outdoor forest school sessions in the wildlife area of Queen\'s Park. Children learn through nature-based play: den building, bug hunting, mud kitchen, seasonal crafts. Sessions run in all weather (the kids love rainy days). Led by qualified forest school practitioners.',
      recommendation: 'Kids come home muddy, tired, and happy. The kind of childhood experience that\'s increasingly rare in London.',
      tags: ['forest school', 'outdoor', 'nature', 'queens park', 'active', 'term time'],
      contact: 'https://www.cityoflondon.gov.uk/things-to-do/green-spaces/queens-park',
      linkLabel: 'Queen\'s Park',
      mapQuery: 'Queen\'s Park Wildlife Area, Harvist Road, London NW6 6SG'
    }
  ]
};
const SECTIONS = ['this-week', 'camps', 'childcare', 'cafes', 'indoor', 'send', 'activities'];
const SECTION_DATA_KEYS = {
  'this-week': 'thisWeek'
};

function dataKeyForSection(sectionId) {
  return SECTION_DATA_KEYS[sectionId] || sectionId;
}
const AGE_ORDER = ['0-2', '2-4', '4-8', '8+', 'all-ages', 'all'];
const COST_ORDER = ['free', 'low', 'mid', 'high', 'varies'];
const ACTIVITY_DEFAULT_IMAGE = './assets/hero.png';
const CARD_IMAGE_DEFAULTS = {
  'this-week': {
    default: './assets/illustrations/activities.svg',
    workshop: './assets/illustrations/library.svg',
    craft: './assets/illustrations/library.svg',
    library: './assets/illustrations/library.svg',
    festival: './assets/illustrations/activities.svg',
    music: './assets/illustrations/theatre.svg',
    garden: './assets/illustrations/garden.svg'
  },
  camps: {
    default: './assets/illustrations/camps.svg',
    tennis: './assets/illustrations/parks.svg',
    performing: './assets/illustrations/theatre.svg',
    dance: './assets/illustrations/clubs.svg',
    stem: './assets/illustrations/clubs.svg',
    forest: './assets/illustrations/parks.svg',
    sport: './assets/illustrations/swim.svg',
    earlyYears: './assets/illustrations/childcare.svg'
  },
  childcare: {
    default: './assets/illustrations/childcare.svg',
    montessori: './assets/illustrations/childcare.svg',
    nursery: './assets/illustrations/childcare.svg'
  },
  cafes: {
    default: './assets/illustrations/cafe.svg'
  },
  pubs: {
    default: './assets/illustrations/pubs.svg'
  },
  indoor: {
    default: './assets/illustrations/indoor.svg'
  },
  send: {
    default: './assets/illustrations/send.svg'
  },
  activities: {
    default: './assets/illustrations/activities.svg',
    parks: './assets/illustrations/parks.svg',
    libraries: './assets/illustrations/library.svg',
    swim: './assets/illustrations/swim.svg',
    clubs: './assets/illustrations/clubs.svg',
    culture: './assets/illustrations/culture.svg',
    theatre: './assets/illustrations/theatre.svg',
    sport: './assets/illustrations/clubs.svg'
  }
};
const RANDOM_STOCK_BLOCKLIST = new Set([
  'event-banner-making-family-craft-workshop',
  'event-magic-and-imagination',
  'event-family-craft-dance-clothes',
  'event-international-childrens-day',
  'act-brent-library-events',
  'child-bright-horizons',
  'child-monkey-puzzle',
  'child-n-family',
  'child-little-garden',
  'child-richborough',
  'child-mulberry-house',
  'child-broadhurst',
  'child-rainbow-montessori',
  'child-treetops',
  'child-happy-hands-willesden',
  'child-dollis-hill',
  'child-wetherby-kensal',
  'child-brondesbury-nursery',
  'child-kensal-house',
  'child-college-green',
  'child-anson-primary',
  'child-busy-bees-harlesden',
  'child-busy-bees-kilburn',
  'child-wetherby-queens-park',
  'child-snuggle-bunnies',
  'child-bright-star-kilburn',
  'send-local-offer',
  'send-family-info',
  'send-contact',
  'send-ipsea',
  'send-inclusive-activities',
  'send-ask-parents'
]);
const SAFE_NEUTRAL_FALLBACKS = {
  'this-week': './assets/hero.png',
  childcare: './assets/hero.png',
  send: './assets/hero.png'
};
const SAFE_NEUTRAL_HINT_FALLBACKS = {
  library: './assets/hero.png',
  craft: './assets/hero.png',
  workshop: './assets/hero.png',
  garden: './assets/illustrations/garden.svg'
};
const STOCK_IMAGE_HOSTS = ['images.unsplash.com'];
const BROKEN_REMOTE_IMAGE_PATTERNS = [
  /^http:\/\//i,
  /clubspark\.lta\.org\.uk\/Library\//i,
  /\.(ico)(?:[?#].*)?$/i,
  /favicon/i,
  /logo\*/i
];
const GROUP_VISIBLE_LIMITS = {
  activities: 8,
  camps: 6
};
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

function cardMatches(item, query, sectionFilter, ageFilter, costFilter, seasonFilter, shortlistOnly) {
  if (LOCAL_ONLY_BLOCKLIST.has(item.id)) return false;
  const staticCoords = STATIC_MAP_COORDS[item.id];
  if (staticCoords && !isWithinWillesden(item, staticCoords)) return false;
  const haystack = [item.name, item.area, item.blurb, item.recommendation, item.age, item.cost, ...(item.tags || [])].join(' ').toLowerCase();
  const searchOk = !query || haystack.includes(query);
  const sectionOk = sectionFilter === 'all' || item.section === sectionFilter;
  const ageOk = ageMatches(item.age, ageFilter);
  const costOk = costMatches(item.cost, costFilter);
  const seasonOk = seasonFilter === 'all' || !item.season || item.season === seasonFilter;
  const shortlistOk = !shortlistOnly || LS.shortlist.has(item.id);
  const openNowOk = !window._openNowFilter || isOpenNow(item);
  return searchOk && sectionOk && ageOk && costOk && seasonOk && shortlistOk && openNowOk;
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

function sourceLabelForItem(item) {
  const source = String(item.contact || item.link || '').toLowerCase();
  if (!source) return '';
  if (source.includes('clubspark') || source.includes('lta.org.uk')) return 'Official venue';
  if (source.includes('brent.gov.uk') || source.includes('camden.gov.uk') || source.includes('.gov.uk')) return 'Council source';
  if (source.includes('classforkids') || source.includes('bookwhen') || source.includes('clubsolution')) return 'Booking page';
  if (source.includes('ofsted.gov.uk') || source.includes('reports.ofsted.gov.uk')) return 'Ofsted';
  if (source.includes('google.com/search')) return 'Search result';
  return 'Official site';
}

function imageHintForItem(item) {
  const text = [item.name, item.blurb, item.recommendation, ...(item.tags || [])].join(' ').toLowerCase();
  if (item.section === 'this-week') {
    if (/garden|dell/.test(text)) return 'garden';
    if (/festival|circus/.test(text)) return 'festival';
    if (/music|talk|live/.test(text)) return 'music';
    if (/library|writing|book/.test(text)) return 'library';
    if (/craft/.test(text)) return 'craft';
    if (/workshop/.test(text)) return 'workshop';
    return 'default';
  }
  if (item.section === 'activities') {
    const type = activityTypeForItem(item);
    if (type === 'parks & outdoors') return 'parks';
    if (type === 'libraries') return 'libraries';
    if (type === 'swim & lessons') return 'swim';
    if (type === 'museums & culture') return 'culture';
    if (type === 'cinema & theatre') return 'theatre';
    if (type === 'leisure & sport') return 'sport';
    return 'clubs';
  }
  if (item.section === 'camps') {
    const type = campTypeForItem(item);
    if (type === 'tennis & racket sports') return 'tennis';
    if (type === 'performing arts') return 'performing';
    if (type === 'dance & movement') return 'dance';
    if (type === 'stem & science') return 'stem';
    if (type === 'forest school & outdoors') return 'forest';
    if (type === 'sports & active') return 'sport';
    if (type === 'early years play schemes') return 'earlyYears';
    return 'default';
  }
  if (item.section === 'childcare') {
    if (/montessori/.test(text)) return 'montessori';
    return 'nursery';
  }
  return 'default';
}

function isBlockedStockImage(url) {
  if (!url) return false;
  try {
    const absolute = new URL(url, window.location.href);
    return STOCK_IMAGE_HOSTS.includes(absolute.hostname);
  } catch {
    return false;
  }
}

function shouldAvoidCardImage(url) {
  if (!url) return true;
  return BROKEN_REMOTE_IMAGE_PATTERNS.some(pattern => pattern.test(String(url)));
}

function cardImageForItem(item) {
  const explicitPromo = item.cardImage || item.promoImage;
  const overrideImage = window.WF_CARD_IMAGES && (window.WF_CARD_IMAGES[item.id] || window.WF_CARD_IMAGES[item.name]);
  if (explicitPromo && !shouldAvoidCardImage(explicitPromo)) return explicitPromo;
  if (overrideImage && !shouldAvoidCardImage(overrideImage)) return overrideImage;
  const sectionDefaults = CARD_IMAGE_DEFAULTS[item.section] || {};
  const hint = imageHintForItem(item);
  const candidate = sectionDefaults[hint] || sectionDefaults.default || ACTIVITY_DEFAULT_IMAGE;
  if (RANDOM_STOCK_BLOCKLIST.has(item.id) && isBlockedStockImage(candidate)) {
    return SAFE_NEUTRAL_HINT_FALLBACKS[hint] || SAFE_NEUTRAL_FALLBACKS[item.section] || ACTIVITY_DEFAULT_IMAGE;
  }
  return candidate;
}

function cardFallbackImageForItem(item) {
  const sectionDefaults = CARD_IMAGE_DEFAULTS[item.section] || {};
  const hint = imageHintForItem(item);
  return sectionDefaults[hint] || sectionDefaults.default || SAFE_NEUTRAL_HINT_FALLBACKS[hint] || SAFE_NEUTRAL_FALLBACKS[item.section] || ACTIVITY_DEFAULT_IMAGE;
}

function shouldCollapseGroup(section, count) {
  return count > (GROUP_VISIBLE_LIMITS[section] || Infinity);
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
    const collapsed = shouldCollapseGroup('activities', groupItems.length);
    const visibleItems = collapsed ? groupItems.slice(0, GROUP_VISIBLE_LIMITS.activities) : groupItems;
    return `
      <section class="activity-group${collapsed ? ' collapsible-group' : ''}" data-activity-type="${escapeAttr(type)}">
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
        <div class="group-meta-row">
          <span class="group-meta-pill">${groupItems.length} places</span>
          ${collapsed ? `<button class="group-toggle-button" type="button" data-group-toggle="activities" data-group-target="${escapeAttr(slugifyType(type))}" aria-expanded="false">Show ${groupItems.length - GROUP_VISIBLE_LIMITS.activities} more</button>` : ''}
        </div>
        <div class="parent-grid activity-group-grid${collapsed ? ' is-collapsed' : ''}" data-group-grid="activities" data-group-key="${escapeAttr(slugifyType(type))}">
          ${visibleItems.map(renderCard).join('')}
          ${collapsed ? `<div class="group-hidden-items" hidden>${groupItems.slice(GROUP_VISIBLE_LIMITS.activities).map(renderCard).join('')}</div>` : ''}
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
    const collapsed = shouldCollapseGroup('camps', groupItems.length);
    const visibleItems = collapsed ? groupItems.slice(0, GROUP_VISIBLE_LIMITS.camps) : groupItems;
    return `
      <section class="camp-group${collapsed ? ' collapsible-group' : ''}" id="camp-group-${slugifyType(type)}" data-camp-type="${escapeAttr(type)}">
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
        <div class="group-meta-row">
          <span class="group-meta-pill">${groupItems.length} options</span>
          ${collapsed ? `<button class="group-toggle-button" type="button" data-group-toggle="camps" data-group-target="${escapeAttr(slugifyType(type))}" aria-expanded="false">Show ${groupItems.length - GROUP_VISIBLE_LIMITS.camps} more</button>` : ''}
        </div>
        <div class="parent-grid camp-group-grid${collapsed ? ' is-collapsed' : ''}" data-group-grid="camps" data-group-key="${escapeAttr(slugifyType(type))}">
          ${visibleItems.map(renderCard).join('')}
          ${collapsed ? `<div class="group-hidden-items" hidden>${groupItems.slice(GROUP_VISIBLE_LIMITS.camps).map(renderCard).join('')}</div>` : ''}
        </div>
      </section>
    `;
  }).join('')}`;
}

function renderCard(item) {
  const isSaved = LS.shortlist.has(item.id);
  const contactUrl = item.contact || item.link || '#';
  const hasLink = contactUrl && contactUrl !== '#';
  const mapQuery = item.mapQuery || item.name;
  const cardImage = cardImageForItem(item);
  const campType = item.section === 'camps' ? campTypeForItem(item) : '';
  const sourceLabel = sourceLabelForItem(item);
  const tags = (item.tags || []).slice(0, 4).map(tag => `<span class="mini-pill">${tag}</span>`).join('');

  return `
    <article class="parent-card ${item.cardTone || ''}" data-item="${item.id}" data-section="${item.section}" data-age="${item.age}" data-cost="${item.cost}" data-search="${escapeHtml([item.name, item.area, item.blurb, item.recommendation, item.age, item.cost, ...(item.tags || [])].join(' ')).toLowerCase()}"${item.section === 'activities' ? ` data-activity-type="${escapeAttr(activityTypeForItem(item))}"` : ''}${item.section === 'camps' ? ` data-camp-type="${escapeAttr(campType)}"` : ''}>
      <div class="parent-card-media-wrap">
        ${hasLink ? `<a class="parent-card-promo" href="${escapeAttr(contactUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(item.promoAlt || item.name)}">` : '<div class="parent-card-promo" aria-hidden="true">'}
          <img src="${escapeAttr(cardImage)}" alt="${escapeAttr(item.promoAlt || item.name)}" loading="lazy" data-fallback-src="${escapeAttr(cardFallbackImageForItem(item))}" onerror="if(this.dataset.fallbackSrc && this.src !== this.dataset.fallbackSrc){this.src=this.dataset.fallbackSrc;return;}this.onerror=null;this.src='${ACTIVITY_DEFAULT_IMAGE}';">
          <div class="parent-card-media-overlay"></div>
          <div class="parent-card-media-topline">
            <span class="media-section-pill">${escapeHtml(formatSectionLabel(item.section))}</span>
            ${sourceLabel ? `<span class="media-source-pill">${escapeHtml(sourceLabel)}</span>` : ''}
          </div>
        ${hasLink ? '</a>' : '</div>'}
        <div class="parent-card-floating-brandmark">${renderBrandMark(item)}</div>
      </div>
      <div class="parent-card-top">
        <div class="parent-card-title-wrap">
          <div class="parent-card-kicker">${escapeHtml(item.area)}</div>
          <h3>${escapeHtml(item.name)}</h3>
          ${item.eventDate ? `<div class="event-meta">${escapeHtml(item.eventDate)}${item.eventTime ? ` · ${escapeHtml(item.eventTime)}` : ''}</div>` : ''}
          ${campType ? `<div class="camp-type-chip"><span class="camp-type-chip-icon">${campTypeIcon(campType)}</span><span>${escapeHtml(campTypeLabel(campType))}</span></div>` : ''}
        </div>
        <button class="save-btn ${isSaved ? 'saved' : ''}" data-action="save" data-id="${item.id}" aria-pressed="${isSaved ? 'true' : 'false'}" aria-label="${isSaved ? 'Remove from shortlist' : 'Save to shortlist'}">
          ${ICONS.save}
        </button>
      </div>
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
        <span>${item.isNew ? '<span class="freshness-badge">New</span> ' : ''}${item.featured ? 'Featured this week' : (sourceLabel || 'Saved locally if you want it')}</span>
        <a class="text-button" href="#contact">Suggest edit</a>
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
  if (sectionId === 'this-week') {
    // Split by region
    const localGrid = document.getElementById('this-week-local-grid');
    const widerGrid = document.getElementById('this-week-wider-grid');
    const local = items.filter(i => i.region !== 'wider');
    const wider = items.filter(i => i.region === 'wider');
    if (localGrid) localGrid.innerHTML = local.map(renderCard).join('');
    if (widerGrid) widerGrid.innerHTML = wider.map(renderCard).join('');
    const count = document.getElementById('count-this-week');
    if (count) count.textContent = items.length;
    return;
  }
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
  const seasonFilter = document.querySelector('[data-season-filter].active')?.dataset.seasonFilter || 'all';
  const shortlistOnly = document.querySelector('[data-shortlist-only]')?.classList.contains('active') || false;

  return Object.fromEntries(
    Object.entries(DATA).map(([key, items]) => [
      key,
      items.filter(item => cardMatches(item, query, sectionFilter, ageFilter, costFilter, seasonFilter, shortlistOnly))
    ])
  );
}

function renderAll() {
  const highlights = DATA.thisWeek.filter(item => item.featured);
  const container = document.getElementById('hero-highlights');
  if (container) {
    container.innerHTML = highlights.map(item => `
      <a href="#this-week" class="highlight-item" data-id="${item.id}">
        <span class="highlight-date">${escapeHtml(item.eventDate)}</span>
        <span class="highlight-name">${escapeHtml(item.name)}</span>
        <span class="highlight-area">${escapeHtml(item.area)}</span>
        ${item.cost === 'free' ? '<span class="highlight-free">Free</span>' : ''}
      </a>
    `).join('');
  }
  const filtered = getFilteredItems();
  currentFilteredGroups = filtered;
  SECTIONS.forEach(section => renderSection(section, filtered[dataKeyForSection(section)] || []));
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
    const hasCards = (filtered[dataKeyForSection(section)] || []).length > 0;
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
  document.querySelectorAll('[data-section-filter], [data-age-filter], [data-cost-filter], [data-season-filter]').forEach(btn => {
    btn.addEventListener('click', () => syncFilters(btn));
  });
  const shortlistToggle = document.querySelector('[data-shortlist-only]');
  shortlistToggle.addEventListener('click', () => {
    shortlistToggle.classList.toggle('active');
    shortlistToggle.setAttribute('aria-pressed', shortlistToggle.classList.contains('active') ? 'true' : 'false');
    renderAll();
  });

  document.body.addEventListener('click', (event) => {
    const groupToggle = event.target.closest('[data-group-toggle]');
    if (groupToggle) {
      const groupType = groupToggle.dataset.groupToggle;
      const groupTarget = groupToggle.dataset.groupTarget;
      const grid = document.querySelector(`[data-group-grid="${groupType}"][data-group-key="${groupTarget}"]`);
      if (!grid) return;
      const hidden = grid.querySelector('.group-hidden-items');
      const expanded = groupToggle.getAttribute('aria-expanded') === 'true';
      if (!hidden) return;
      hidden.hidden = expanded;
      groupToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      groupToggle.textContent = expanded ? `Show ${hidden.querySelectorAll('article').length} more` : 'Show fewer';
      grid.classList.toggle('is-expanded', !expanded);
      return;
    }

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

// ── Near Me Geolocation ──
function triggerNearMe() {
  var btn = document.getElementById('near-me-btn');
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }
  if (btn) { btn.textContent = '📍 Locating…'; btn.disabled = true; }
  navigator.geolocation.getCurrentPosition(function(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    // Scroll to map and zoom to user location
    var mapSection = document.getElementById('map');
    if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
    // If Leaflet map exists, fly to user location
    setTimeout(function() {
      if (typeof map !== 'undefined' && map && map.flyTo) {
        map.flyTo([lat, lng], 15);
        // Add a marker for user location
        if (typeof L !== 'undefined') {
          var userIcon = L.divIcon({ className: 'user-location-marker', html: '<div style="width:16px;height:16px;background:#4285F4;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>', iconSize: [16, 16], iconAnchor: [8, 8] });
          var marker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
          marker.bindPopup('📍 You are here').openPopup();
          setTimeout(function() { map.removeLayer(marker); }, 10000);
        }
      }
    }, 600);
    if (btn) { btn.textContent = '📍 Near me'; btn.disabled = false; btn.setAttribute('aria-pressed', 'true'); }
  }, function(err) {
    if (btn) { btn.textContent = '📍 Near me'; btn.disabled = false; }
    alert('Could not get your location. Please check your browser permissions.');
  }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
}

function toggleOpenNow() {
  var btn = document.getElementById('open-now-btn');
  if (!btn) return;
  var isActive = btn.getAttribute('aria-pressed') === 'true';
  btn.setAttribute('aria-pressed', isActive ? 'false' : 'true');
  btn.classList.toggle('active', !isActive);
  // Rerender with open-now filter applied
  var now = new Date();
  var currentDay = now.getDay(); // 0=Sun, 1=Mon...
  var currentHour = now.getHours();
  // Store filter state globally for cardMatches to use
  window._openNowFilter = !isActive ? { day: currentDay, hour: currentHour } : null;
  // Re-filter: find items that match current time
  // This is a heuristic — we don't have opening hours data, so we assume:
  // - Parks/playgrounds: open during daylight (7am-8pm)
  // - Indoor venues: typical opening hours (9am-6pm)
  // - Pubs/restaurants: open mid-morning to late
  // Filter by assuming most things are "open" in reasonable windows
  renderAll();
  // Show status
  if (!isActive) {
    btn.textContent = '🕐 Now: ' + ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][currentDay] + ' ' + currentHour + ':00';
  } else {
    btn.textContent = '🕐 Open now';
  }
}

function isOpenNow(item) {
  var now = new Date();
  var day = now.getDay();
  var hour = now.getHours();
  // Parks/playgrounds → daylight hours
  var isOutdoor = /park|playground|garden|outdoor|nature|forest/.test([item.name, item.blurb, ...(item.tags||[])].join(' ').toLowerCase());
  if (isOutdoor) return hour >= 7 && hour <= 20;
  // Pubs/restaurants → lunch through evening
  var isFood = /pub|restaurant|café|cafe|pizza|food/.test([item.name, item.blurb, item.section, ...(item.tags||[])].join(' ').toLowerCase());
  if (isFood) return hour >= 10 && hour <= 22;
  // Indoor/general → typical opening
  return hour >= 9 && hour <= 18;
}

bootstrap();
