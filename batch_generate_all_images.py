from pathlib import Path
import json
import time

ROOT = Path('/root/.hermes/workspace/willesden-families')
OUT_DIR = ROOT / 'assets' / 'generated-cards'
OUT_DIR.mkdir(parents=True, exist_ok=True)

PLAN = {
  'event-banner-making-family-craft-workshop': 'Children and parents making a large community banner together at a library craft table, paper shapes, paints, Brent community workshop feel, warm editorial illustration, landscape banner, no text, no logos',
  'event-long-play-lloyd-bradley': 'Evening live culture event in a small music venue with audience seating, speaker on stage and warm local atmosphere, editorial illustration, landscape banner, no text, no logos',
  'event-magic-and-imagination': 'Children aged around primary school writing poems and stories in a bright local library workshop, pencils, notebooks, playful imagination theme, warm editorial illustration, landscape banner, no text, no logos',
  'event-family-craft-dance-clothes': 'Family craft session inspired by dance costumes, children decorating paper costume shapes with bright colours at a community library table, warm editorial illustration, landscape banner, no text, no logos',
  'event-international-childrens-day': 'Festive family day with children, balloons, face painting, craft tables and light circus touches outside a local library venue, joyful but tasteful editorial illustration, landscape banner, no text, no logos',

  'camp-fresh-arts-queens-park': 'Children at an arts holiday camp painting, making props and doing light performance activities in a bright studio, warm editorial illustration, landscape banner, no text, no logos',
  'camp-jag-willesden-sports-centre': 'Busy multi-activity holiday camp with children rotating between crafts, indoor games and sports in a leisure centre, clean editorial illustration, landscape banner, no text, no logos',
  'camp-holiday-academy': 'Children at a STEM holiday camp building simple robots and creative projects around shared tables, editorial illustration, landscape banner, no text, no logos',
  'camp-nwga-queens-park': 'Children practicing beginner gymnastics with mats and coach support in a bright gym hall, editorial illustration, landscape banner, no text, no logos',
  'camp-apf-brent': 'School-holiday multi-activity camp with children doing football, crafts and group games on a school playground, warm editorial illustration, landscape banner, no text, no logos',
  'camp-brent-haf': 'Inclusive funded holiday programme scene with children sharing lunch, crafts and games at a school hall, warm editorial illustration, landscape banner, no text, no logos',
  'camp-breezy-club': 'Children enjoying a varied holiday club with den building, craft table and outdoor play, warm editorial illustration, landscape banner, no text, no logos',
  'camp-little-dance-queens-park': 'Young children at a dance holiday camp stretching and moving in a sunny studio, friendly teacher, warm editorial illustration, landscape banner, no text, no logos',
  'camp-dance-by-the-park': 'Children dancing in a bright local studio near a park, ribbons and movement, welcoming holiday camp vibe, warm editorial illustration, landscape banner, no text, no logos',
  'camp-club-excel-qpcs': 'Large school-based holiday camp with mixed ages doing sports, table activities and supervised play, welcoming editorial illustration, landscape banner, no text, no logos',
  'camp-serving-winners': 'Kids tennis holiday camp on outdoor courts with coach and mini nets, summer community feel, clean editorial illustration, landscape banner, no text, no logos',
  'camp-queens-park-tennis-courts': 'Children’s tennis holiday camp on city park courts with coach and bright summer energy, editorial illustration, landscape banner, no text, no logos',
  'camp-vale-tennis-coaching': 'Youth tennis coaching holiday camp on outdoor courts with cones and rackets, editorial illustration, landscape banner, no text, no logos',
  'camp-highgate-tennis': 'Children doing tennis camp drills on leafy outdoor courts, editorial illustration, landscape banner, no text, no logos',
  'camp-msport-active': 'Active children doing relay races and ball games at a sports holiday camp, energetic but clean editorial illustration, landscape banner, no text, no logos',
  'camp-petite-performers-west-hampstead': 'Preschool-age children singing, moving and playing theatre games in a small studio, cheerful and gentle editorial illustration, landscape banner, no text, no logos',
  'camp-rocket-club-kensal-rise': 'Creative kids science and making club with cardboard builds, gadgets and playful teamwork, editorial illustration, landscape banner, no text, no logos',
  'camp-2-da-stage': 'Performing arts holiday club with children rehearsing dance and drama on a studio floor, editorial illustration, landscape banner, no text, no logos',
  'camp-jag-salusbury': 'Primary-school holiday club with crafts, board games and playground play at a school, warm editorial illustration, landscape banner, no text, no logos',

  'child-bright-horizons': 'Warm, polished nursery interior with toddlers, books, wooden toys and carers, premium childcare feel, editorial illustration, landscape banner, no text, no logos',
  'child-monkey-puzzle': 'Friendly nursery classroom with toddlers exploring toys and a reading corner, welcoming editorial illustration, landscape banner, no text, no logos',
  'child-n-family': 'Modern design-led nursery with soft play materials, books and natural light, warm editorial illustration, landscape banner, no text, no logos',
  'child-little-garden': 'Outdoor-focused nursery garden with toddlers, planters, mud kitchen and gentle forest-school feel, editorial illustration, landscape banner, no text, no logos',
  'child-richborough': 'Small home-from-home nursery room with toddlers, mats, toys and calm carers, warm editorial illustration, landscape banner, no text, no logos',
  'child-mulberry-house': 'Independent early-years classroom with children at tables and calm teacher support, editorial illustration, landscape banner, no text, no logos',
  'child-broadhurst': 'Premium nursery and pre-prep early learning room with books, wooden toys and warm light, editorial illustration, landscape banner, no text, no logos',
  'child-rainbow-montessori': 'Montessori early years classroom with practical life trays, child-sized tables and calm learning atmosphere, editorial illustration, landscape banner, no text, no logos',
  'child-malorees': 'School-based nursery classroom with children at play and early years learning areas, editorial illustration, landscape banner, no text, no logos',
  'child-princess-frederica': 'Community nursery school setting with small children and structured play areas, editorial illustration, landscape banner, no text, no logos',
  'child-beckford-nursery': 'Primary-school nursery environment with bright early years corner and children playing, editorial illustration, landscape banner, no text, no logos',
  'child-treetops': 'Happy nursery garden with small children exploring outdoor play equipment and greenery, editorial illustration, landscape banner, no text, no logos',
  'child-happy-hands-willesden': 'Montessori nursery scene with children using wooden learning materials and low shelves, warm editorial illustration, landscape banner, no text, no logos',
  'child-dollis-hill': 'Modern nursery interior with toddlers, soft play and natural light, warm editorial illustration, landscape banner, no text, no logos',
  'child-wetherby-kensal': 'Montessori preschool room with low shelves, practical activities and calm atmosphere, editorial illustration, landscape banner, no text, no logos',
  'child-brondesbury-nursery': 'Small community nursery classroom with warm, local feel and gentle toddler play, editorial illustration, landscape banner, no text, no logos',
  'child-kensal-house': 'Community nursery and preschool scene with children at play and creative table activities, editorial illustration, landscape banner, no text, no logos',
  'child-college-green': 'Children’s centre style nursery room with play mats, books and early years activities, editorial illustration, landscape banner, no text, no logos',
  'child-anson-primary': 'Primary school nursery classroom with bright early years tables and small children at play, editorial illustration, landscape banner, no text, no logos',
  'child-busy-bees-harlesden': 'Cheerful nursery setting with toddlers building and painting together, editorial illustration, landscape banner, no text, no logos',
  'child-busy-bees-kilburn': 'Welcoming nursery classroom with play corners, books and young children, editorial illustration, landscape banner, no text, no logos',
  'child-wetherby-queens-park': 'Montessori nursery room with practical life activities and calm teacher support, editorial illustration, landscape banner, no text, no logos',
  'child-snuggle-bunnies': 'Cosy local nursery scene with toddlers, soft toys and relaxed carers, editorial illustration, landscape banner, no text, no logos',
  'child-bright-star-kilburn': 'Cheerful local day nursery with toddlers playing and painting in a bright room, editorial illustration, landscape banner, no text, no logos',

  'cafe-hearth': 'Stylish family-friendly cafe with coffee, pastries, buggy space and relaxed seating, editorial illustration, landscape banner, no text, no logos',
  'cafe-queens-park-books': 'Independent bookshop cafe with coffee cups, bookshelves and parents with children reading, editorial illustration, landscape banner, no text, no logos',
  'cafe-willesden-library': 'Library cafe corner with coffee, tables, buggy-friendly space and books nearby, editorial illustration, landscape banner, no text, no logos',
  'cafe-maqam': 'Community cafe interior with tea, coffee, pastries and quiet family seating, editorial illustration, landscape banner, no text, no logos',
  'cafe-local-park': 'Parents and children stopping for drinks at a park cafe kiosk beside greenery and prams, editorial illustration, landscape banner, no text, no logos',
  'cafe-respite': 'Neighbourhood buggy-friendly coffee stop with relaxed seating and warm local feel, editorial illustration, landscape banner, no text, no logos',

  'indoor-library': 'Bright local library interior with children’s books, seating and family activity area, editorial illustration, landscape banner, no text, no logos',
  'indoor-hearth': 'Warm indoor community space with comfortable seating, coffee and family-friendly atmosphere, editorial illustration, landscape banner, no text, no logos',
  'indoor-books': 'Cosy children-friendly independent bookshop interior with reading nook, editorial illustration, landscape banner, no text, no logos',
  'indoor-swim': 'Parent-and-child swim lesson in a warm indoor pool with gentle coaching, editorial illustration, landscape banner, no text, no logos',
  'indoor-softplay': 'Soft-play venue with colourful climbing shapes, toddler play and parent seating, editorial illustration, landscape banner, no text, no logos',
  'indoor-home': 'Calm rainy-day at-home family activity scene with crafts, books and toys on a living room table, editorial illustration, landscape banner, no text, no logos',

  'send-local-offer': 'Supportive family information scene with parent, child and advisor reviewing helpful resources together, warm editorial illustration, landscape banner, no text, no logos',
  'send-family-info': 'Parent-friendly family support desk scene with leaflets, laptop and calm conversation, editorial illustration, landscape banner, no text, no logos',
  'send-contact': 'Welcoming support conversation between a parent and advisor in a calm community setting, editorial illustration, landscape banner, no text, no logos',
  'send-ipsea': 'Parent advocacy and SEND support concept with documents, guidance and reassuring professional help, editorial illustration, landscape banner, no text, no logos',
  'send-inclusive-activities': 'Inclusive family activity scene with children of different needs playing and creating together with parent support, editorial illustration, landscape banner, no text, no logos',
  'send-ask-parents': 'Parent recommendation and peer-support scene with two parents chatting warmly in a community space, editorial illustration, landscape banner, no text, no logos',

  'act-baby-swim': 'Parent and baby swim lesson in a bright pool, gentle movement and warm water feel, editorial illustration, landscape banner, no text, no logos',
  'act-busy-rascals': 'Toddler music and playgroup with little children moving, instruments and parent participation, editorial illustration, landscape banner, no text, no logos',
  'act-classes': 'Mixed local children’s classes montage with dance, music and art activities, editorial illustration, landscape banner, no text, no logos',
  'act-parks': 'Families enjoying a well-kept London park with playground, paths and picnic feel, editorial illustration, landscape banner, no text, no logos',
  'act-the-playmap': 'Parent and toddler playgroup scene with soft mats, toys and social play, editorial illustration, landscape banner, no text, no logos',
  'act-brent-museum': 'Local museum gallery with children and parents exploring exhibits together, editorial illustration, landscape banner, no text, no logos',
  'act-lexi-cinema': 'Independent cinema foyer with parents and children arriving for a family screening, editorial illustration, landscape banner, no text, no logos',
  'act-freud-museum': 'Museum house interior with families browsing a calm cultural space, editorial illustration, landscape banner, no text, no logos',
  'act-willesden-green-library': 'Bright local library interior with families reading, children’s shelves and seating, editorial illustration, landscape banner, no text, no logos',
  'act-west-hampstead-library': 'Neighbourhood library with bookshelves, story corner and family browsing, editorial illustration, landscape banner, no text, no logos',
  'act-brent-library-events': 'Children at a local library storytime and craft session, bright bookshelves and community feel, editorial illustration, landscape banner, no text, no logos',
  'act-willesden-sports-swim': 'Children’s swim lessons in a local leisure pool with instructor and lane ropes, editorial illustration, landscape banner, no text, no logos',
  'act-willesden-sports-baby-swim': 'Baby and toddler swim class with parents in a shallow warm pool, editorial illustration, landscape banner, no text, no logos',
  'act-willesden-sports-send-swim': 'Inclusive swim lesson with supportive instructor and calm pool environment, editorial illustration, landscape banner, no text, no logos',
  'act-cygnets-manor': 'Children’s swim school scene in a compact teaching pool, editorial illustration, landscape banner, no text, no logos',
  'act-swimtank-willesden': 'Small-group swim lesson with child swimmers and instructor in a clean indoor pool, editorial illustration, landscape banner, no text, no logos',
  'act-swiss-cottage-leisure': 'Busy family leisure centre scene with swimming and indoor sports energy, editorial illustration, landscape banner, no text, no logos',
  'act-natural-history-museum': 'Families exploring natural history exhibits and dinosaur gallery feel, editorial illustration, landscape banner, no text, no logos',
  'act-science-museum': 'Interactive science museum with children pressing buttons and exploring exhibits, editorial illustration, landscape banner, no text, no logos',
  'act-young-vanda': 'Playful children’s design museum with colourful hands-on displays, editorial illustration, landscape banner, no text, no logos',
  'act-london-transport-museum': 'Children exploring transport exhibits and old train or bus displays, editorial illustration, landscape banner, no text, no logos',
  'act-british-museum': 'Families walking through grand museum galleries with historic objects, editorial illustration, landscape banner, no text, no logos',
  'act-london-museum-docklands': 'Families exploring docks and city history museum exhibits, editorial illustration, landscape banner, no text, no logos',
  'act-postal-museum': 'Museum visit with children exploring postal history and interactive displays, editorial illustration, landscape banner, no text, no logos',
  'act-national-maritime-museum': 'Families visiting maritime exhibits with ships and navigation themes, editorial illustration, landscape banner, no text, no logos',
  'act-horniman-museum': 'Family museum visit with natural history and cultural displays in a bright gallery, editorial illustration, landscape banner, no text, no logos',
  'act-national-army-museum': 'Families exploring military history exhibits in a museum setting, editorial illustration, landscape banner, no text, no logos',
  'act-grace-poise': 'Children’s dance or arts class in a bright studio with teacher guidance, editorial illustration, landscape banner, no text, no logos',
  'act-idea-design-hub': 'Creative design workshop for children making art and ideas together, editorial illustration, landscape banner, no text, no logos',
  'act-jinga-jinga': 'Toddler music and movement group with bright mats and parent participation, editorial illustration, landscape banner, no text, no logos',
  'act-flexi-athletics': 'Children’s gymnastics and movement class with mats and beams, editorial illustration, landscape banner, no text, no logos',
  'act-maida-vale-ballet': 'Children in ballet class with teacher and studio mirrors, editorial illustration, landscape banner, no text, no logos',
  'act-switch-sports': 'Community sports session with kids doing football and movement drills, editorial illustration, landscape banner, no text, no logos',
  'act-summit-club-kids': 'Children climbing or doing active indoor movement challenges with coach support, editorial illustration, landscape banner, no text, no logos',
  'act-more-than-sport': 'Youth sports mentoring session with ball games and community coaching, editorial illustration, landscape banner, no text, no logos',
  'act-aurora-gymnastics': 'Children’s gymnastics class with beams, mats and coach support, editorial illustration, landscape banner, no text, no logos',
  'act-paddington-rec-ground': 'Families using a big recreation ground with play and open space, editorial illustration, landscape banner, no text, no logos',
  'act-vue-finchley-road': 'Modern cinema arrival scene for family outing, editorial illustration, landscape banner, no text, no logos',
  'act-st-johns-wood-library': 'Neighbourhood library with story corner, books and family browsing, editorial illustration, landscape banner, no text, no logos',
  'act-canal-cafe-theatre': 'Small theatre venue with intimate stage and audience seating, editorial illustration, landscape banner, no text, no logos',
  'act-pentameters': 'Intimate theatre performance space with warm lighting and small audience, editorial illustration, landscape banner, no text, no logos',
  'act-brent-library-services': 'Children’s library services scene with books, storytelling corner and family learning atmosphere, editorial illustration, landscape banner, no text, no logos',
  'act-willesden-gallery': 'Small local gallery with framed art, parents and children looking together, editorial illustration, landscape banner, no text, no logos',
  'act-portraits-of-brent': 'Community portrait exhibition scene with families viewing local artwork in a gallery, editorial illustration, landscape banner, no text, no logos',
  'act-walking-for-health-roundwood': 'Parents walking together along park paths with greenery and calm community feel, editorial illustration, landscape banner, no text, no logos',
  'act-walking-for-health-gladstone': 'Community wellbeing walk through a leafy London park, editorial illustration, landscape banner, no text, no logos',
  'act-outdoor-gyms-brent': 'Outdoor gym equipment in a park with parents exercising while children play nearby, editorial illustration, landscape banner, no text, no logos',
  'act-barham-park': 'Families enjoying a neighbourhood park with paths, trees and play feel, editorial illustration, landscape banner, no text, no logos',
  'act-fryent-country-park': 'Wide open country park landscape with walking families and greenery, editorial illustration, landscape banner, no text, no logos',
  'act-welsh-harp-open-space': 'Nature reserve and waterside open space with families walking and birdwatching, editorial illustration, landscape banner, no text, no logos',
  'act-neasden-recreation-ground': 'Local recreation ground with families, open grass and play atmosphere, editorial illustration, landscape banner, no text, no logos',
  'act-brent-dolphins-willesden': 'Youth swim club training session in a local pool, editorial illustration, landscape banner, no text, no logos',
  'act-brent-dolphins-vale-farm': 'Competitive junior swim club practice in a bright pool, editorial illustration, landscape banner, no text, no logos',
  'act-wu-shu-kwan': 'Children learning kung fu in a community martial arts class, editorial illustration, landscape banner, no text, no logos',
  'act-track-academy': 'Young athletes running drills on a track with coach guidance, editorial illustration, landscape banner, no text, no logos',
  'act-mg-gymstars': 'Children’s gymnastics class with beams, mats and coach support, editorial illustration, landscape banner, no text, no logos',
  'act-alis-dojang': 'Kids taekwondo or martial arts class in a sports hall, editorial illustration, landscape banner, no text, no logos',
  'act-maiwand-martial-arts': 'Children’s martial arts session with uniformed students and instructor, editorial illustration, landscape banner, no text, no logos',
  'act-young-football-school': 'Children’s football coaching session on an outdoor pitch, editorial illustration, landscape banner, no text, no logos',
  'act-play-with-your-sole': 'Community football training for children with cones and smiling coach, editorial illustration, landscape banner, no text, no logos',
  'act-jason-roberts-foundation': 'Youth football and mentoring activity in a community sports setting, editorial illustration, landscape banner, no text, no logos',
  'act-rsbc-sports-club': 'Inclusive sports club with visually impaired children and supportive coaches in a leisure centre, editorial illustration, landscape banner, no text, no logos',
  'act-2-da-stage': 'Children doing drama and dance together in a performing arts club, editorial illustration, landscape banner, no text, no logos',
  'act-blue-ocean-waves': 'Children’s dance or movement class with bright energy and studio mirrors, editorial illustration, landscape banner, no text, no logos',
  'act-brent-youth-theatre': 'Young performers rehearsing on a small stage with scripts and movement, editorial illustration, landscape banner, no text, no logos',
  'act-concrete-canvas-arts': 'Children making bold art together in a community arts workshop, editorial illustration, landscape banner, no text, no logos',
  'act-abundance-arts': 'Creative community arts session with children painting and making together, editorial illustration, landscape banner, no text, no logos',
  'act-margaret-dance-academy': 'Children in a dance school rehearsal with a teacher and clean studio setting, editorial illustration, landscape banner, no text, no logos',
  'act-london-irish-music-school': 'Children learning traditional music with instruments in a warm class setting, editorial illustration, landscape banner, no text, no logos',
  'act-brent-music-service': 'Music tuition for children with instruments, stands and teacher support, editorial illustration, landscape banner, no text, no logos',
  'act-kalaniketan': 'South Asian dance or music class for children in a community arts setting, editorial illustration, landscape banner, no text, no logos',
  'act-kiln-theatre-young-people': 'Young people in a theatre workshop circle with scripts and movement, editorial illustration, landscape banner, no text, no logos',
  'act-salusbury-world': 'Community support and youth activity scene with families and creative play, editorial illustration, landscape banner, no text, no logos',
  'act-sklpc-saturday-school': 'Saturday school classroom scene with children learning together in a community setting, editorial illustration, landscape banner, no text, no logos',
  'act-edsg-harlesden-saturday-school': 'Community Saturday school with children at desks and supportive teaching, editorial illustration, landscape banner, no text, no logos',
  'act-global-skills-centre': 'Children and teens in an after-school learning hub using laptops and books, editorial illustration, landscape banner, no text, no logos',
  'act-jag-salusbury-primary': 'After-school club at a primary school with crafts, games and supervised play, editorial illustration, landscape banner, no text, no logos'
}

results = {}
fails = {}
for idx, (item_id, prompt) in enumerate(PLAN.items(), start=1):
    try:
        raise RuntimeError('This script must be run via execute_code or another Hermes tool-aware context; hermes_tools is unavailable in plain python.')
        image_path = out.get('image', '')
        if not image_path:
            raise RuntimeError(f'No image returned: {out}')
        src = Path(image_path)
        ext = src.suffix or '.png'
        target = OUT_DIR / f'{item_id}{ext}'
        target.write_bytes(src.read_bytes())
        results[item_id] = f'./assets/generated-cards/{target.name}'
        print(f'[{idx}/{len(PLAN)}] ok {item_id}')
    except Exception as e:
        fails[item_id] = str(e)
        print(f'[{idx}/{len(PLAN)}] FAIL {item_id}: {e}')
    time.sleep(0.15)

(ROOT / 'generated-card-images.json').write_text(json.dumps(results, indent=2) + '\n')
(ROOT / 'generated-card-image-failures.json').write_text(json.dumps(fails, indent=2) + '\n')
print('done', len(results), 'ok', len(fails), 'failed')
