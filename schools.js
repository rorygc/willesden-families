/* ============================================
   Schools Page — Data & Functionality
   ============================================ */

const schools = [
  // ===== OUTSTANDING PRIMARY =====
  {
    name: "St Joseph's RC Primary School",
    address: "Goodson Road, Willesden, London NW10 9LS",
    postcode: "NW10 9LS",
    type: "Voluntary Aided",
    ageRange: "2–11",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "January 2024",
    summary: "A warm, welcoming Catholic primary where children thrive in a close-knit community. The curriculum is rich and ambitious, building deep knowledge from early years through to Year 6. Behaviour is exemplary, with pupils showing high motivation and respect. Exceptional personal development through enrichment activities and community involvement. Strong SEND support.",
    website: "http://www.stjosephsrc.co.uk/",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50241654"
  },
  {
    name: "Our Lady of Grace Catholic Junior School",
    address: "Dollis Hill Lane, London NW2 6HS",
    postcode: "NW2 6HS",
    type: "Academy Converter",
    ageRange: "7–11",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "March 2024",
    summary: "An outstanding junior school (ages 7-11) in Dollis Hill with a highly ambitious curriculum. Pupils achieve exceptionally well, including those with SEND. Behaviour and attitudes are exemplary, and the nurturing environment is enriched by trips, clubs, and community contributions. No areas for improvement identified.",
    website: "https://www.ourladyofgracejuniors.co.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50246234"
  },
  {
    name: "Our Lady of Grace RC Infant & Nursery School",
    address: "Dollis Hill Avenue, London NW2 6EU",
    postcode: "NW2 6EU",
    type: "Academy Converter",
    ageRange: "3–7",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "December 2023",
    summary: "Outstanding infant school (ages 3-7) feeding into the junior school on Dollis Hill Lane. Excellent early years provision, strong phonics and reading foundations. Rated Outstanding across all categories with no areas for improvement.",
    website: "https://www.ologinfants.brent.sch.uk",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/146721"
  },
  {
    name: "Convent of Jesus and Mary RC Infant School",
    address: "21 Park Avenue, London NW2 5AN",
    postcode: "NW2 5AN",
    type: "Voluntary Aided",
    ageRange: "3–7",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "December 2023",
    summary: "A highly ambitious infant school in Brondesbury Park that captures pupils' interests from age 3. Strong emphasis on reading and phonics, with effective SEND support and exemplary behaviour. Outstanding early years provision, leadership, and personal development.",
    website: "http://www.cjminfantschool.co.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50238318"
  },
  {
    name: "St Agnes' Catholic Primary School",
    address: "Thorverton Road, Cricklewood, London NW2 1RG",
    postcode: "NW2 1RG",
    type: "Voluntary Aided",
    ageRange: "3–11",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "March 2025",
    summary: "Very happy, high-achieving Catholic primary in Cricklewood (ages 3-11). Pupils behave exceptionally well and achieve strong academic outcomes through an ambitious, well-implemented curriculum. Strong mathematics, reading, and writing with excellent SEND support and rich opportunities for leadership and clubs.",
    website: "https://stagnesnw2.co.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50275655"
  },
  {
    name: "Kingsgate Primary School",
    address: "Kingsgate Road, London NW6 4LB",
    postcode: "NW6 4LB",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "November 2023",
    summary: "A diverse, thriving community primary in Kilburn with an ambitious curriculum and strong phonics programme. Pupils behave exemplarily and develop confidence and empathy through an exceptional personal development programme. Effective SEND support.",
    website: "https://www.kingsgateprimaryschool.org.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50235332"
  },
  {
    name: "St Eugene de Mazenod RC Primary School",
    address: "Mazenod Avenue, London NW6 4LS",
    postcode: "NW6 4LS",
    type: "Voluntary Aided",
    ageRange: "4–11",
    level: "primary",
    rating: "outstanding",
    ofstedDate: "October 2023",
    summary: "Outstanding Catholic primary in Queen's Park (ages 4-11) with a broad, ambitious curriculum where knowledge builds securely year on year. Excellent SEND support, strong reading and phonics, and exceptional personal development opportunities.",
    website: "https://www.steugene.camden.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50233907"
  },

  // ===== GOOD PRIMARY =====
  {
    name: "Gladstone Park Primary School",
    address: "Sherrick Green Road, Dollis Hill, London NW10 1LB",
    postcode: "NW10 1LB",
    type: "Academy Sponsor-led",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "September 2022",
    summary: "A creative, ambitious primary in Dollis Hill (ages 3-11) with strong reading outcomes thanks to effective phonics. Broad curriculum building knowledge over time with excellent SEND support and personal development. Ofsted notes newer staff need more phonics training.",
    website: "https://www.gladpark.anthemtrust.uk/",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50199104"
  },
  {
    name: "John Keble CofE Primary School",
    address: "Crownhill Road, London NW10 4DR",
    postcode: "NW10 4DR",
    type: "Voluntary Aided",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "June 2023",
    summary: "A nurturing Church of England primary in Harlesden with a genuinely inclusive environment. Ambitious curriculum with strong reading and early years provision. High expectations for behaviour and positive parental feedback. SEND support being refined further.",
    website: "https://www.johnkeble.com",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50224658"
  },
  {
    name: "Newfield Primary School",
    address: "Longstone Avenue, Willesden, London NW10 3UD",
    postcode: "NW10 3UD",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "March 2025",
    summary: "A well-regarded Willesden community primary (ages 3-11) where pupils feel nurtured, safe, and happy. Strong curriculum design with effective SEND support and early reading. 2025 inspection confirms Good standards maintained.",
    website: "https://www.newfield.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50275800"
  },
  {
    name: "Northview Junior and Infant School",
    address: "Northview Crescent, London NW10 1RD",
    postcode: "NW10 1RD",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "May 2022",
    summary: "A happy, safe community primary in Dollis Hill where pupils achieve well across an ambitious curriculum. Strong phonics teaching and SEND support. The diverse community thrives on respect and high expectations.",
    website: "http://www.northview.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50187369"
  },
  {
    name: "Leopold Primary School",
    address: "Hawkshead Road, Willesden, London NW10 9UR",
    postcode: "NW10 9UR",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "June 2022",
    summary: "A diverse, welcoming community primary in Willesden where pupils behave well and work hard. Strong reading outcomes thanks to well-sequenced curriculum and high teacher expectations. Effective support for struggling readers and SEND pupils.",
    website: "https://www.leopoldprimary.co.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50189577"
  },
  {
    name: "St Mary Magdalen's Catholic Junior School",
    address: "Linacre Road, Willesden Green, London NW2 5BB",
    postcode: "NW2 5BB",
    type: "Voluntary Aided",
    ageRange: "7–11",
    level: "primary",
    rating: "good",
    ofstedDate: "September 2023",
    summary: "A Good-rated Catholic junior school (ages 7-11) in Willesden Green with an ambitious curriculum and strong behaviour. Effective early reading and phonics support and well-planned SEND provision.",
    website: "https://www.marymag.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50232207"
  },
  {
    name: "St Mary's CofE Primary School",
    address: "Garnet Road, Willesden, London NW10 9JA",
    postcode: "NW10 9JA",
    type: "Voluntary Aided",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "October 2022",
    summary: "A Good-rated Church of England primary in Willesden (ages 3-11). Consistently good quality of education, behaviour, personal development, and leadership. A reliable local option for families seeking a faith-based primary with nursery.",
    website: "https://www.stmarysce.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101537"
  },
  {
    name: "St Andrew and St Francis CofE Primary School",
    address: "Belton Road, Brent, London NW2 5PE",
    postcode: "NW2 5PE",
    type: "Academy Sponsor-led",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "June 2023",
    summary: "A welcoming Church of England primary in Cricklewood where pupils feel happy and safe. Strong phonics programme driving reading progress. Effective support for SEND pupils. Comprehensive safeguarding and personal development are particular strengths.",
    website: "https://www.standrewandstfrancis.org",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/141672"
  },
  {
    name: "Harlesden Primary School",
    address: "Acton Lane, London NW10 8UT",
    postcode: "NW10 8UT",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "June 2022",
    summary: "A Harlesden community primary where reading is the top priority with a strong phonics programme and well-sequenced curriculum. Effective SEND support. Ofsted recommends ensuring all newer staff deliver the curriculum as intended.",
    website: "https://www.harlesdenschool.com",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50189007"
  },
  {
    name: "Brentfield Primary School",
    address: "41–43 Meadow Garth, London NW10 0SL",
    postcode: "NW10 0SL",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "March 2022",
    summary: "Community primary in Brentfield with an ambitious curriculum and strong safeguarding. Effective SEND support. Pupils behave well and personal development is a notable strength. Reading programme well-regarded.",
    website: "https://www.brentfield.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50183837"
  },
  {
    name: "Mitchell Brook Primary School",
    address: "Bridge Road, Brent, London NW10 9BX",
    postcode: "NW10 9BX",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "November 2023",
    summary: "A strong Brent primary in Dollis Hill with Outstanding ratings for behaviour, attitudes, personal development, and early years. A broad, well-sequenced curriculum with effective SEND support. Great for parents prioritising personal development alongside academics.",
    website: "https://www.mbrook.brent.sch.uk",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101524"
  },
  {
    name: "St Margaret Clitherow RC Primary School",
    address: "Quainton Street, London NW10 0BG",
    postcode: "NW10 0BG",
    type: "Academy Converter",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "May 2024",
    summary: "A Catholic primary in Wembley with a broad, ambitious curriculum and strong phonics teaching. Excellent SEND support in a nurturing faith environment. Pupils develop well both academically and personally.",
    website: "https://www.clitherow.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50250490"
  },
  {
    name: "NW London Jewish Day School",
    address: "180 Willesden Lane, London NW6 7PP",
    postcode: "NW6 7PP",
    type: "Academy",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "November 2022",
    summary: "A Jewish primary in Brent with close community ties. Pupils have positive attitudes, exemplary behaviour, and feel very safe. Broad curriculum well-delivered in a nurturing environment.",
    website: "http://www.nwljds.org.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50206957"
  },
  {
    name: "Emmanuel CofE Primary School",
    address: "152–158 Mill Lane, West Hampstead, London NW6 1TF",
    postcode: "NW6 1TF",
    type: "Voluntary Aided",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "July 2024",
    summary: "A Church of England primary near West Hampstead with evidence of performance approaching Outstanding in some areas. Excellent reading outcomes, strong early years, and very effective SEND support.",
    website: "https://www.emmanuel.camden.sch.uk/",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50257788"
  },
  {
    name: "Anson Primary School",
    address: "Anson Road, London NW2 4AB",
    postcode: "NW2 4AB",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A friendly community primary in Cricklewood with nursery provision and a clear local catchment. A solid local option for families seeking a community school with nursery continuity.",
    website: "https://www.ansonprimaryschool.com/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101514"
  },
  {
    name: "Barham Primary School",
    address: "Danethorpe Road, Wembley, HA0 4RQ",
    postcode: "HA0 4RQ",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large, well-established community primary in Wembley with a broad intake and strong local reputation. Serves the wider Brent area south and east of Willesden.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101515",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101515"
  },
  {
    name: "Byron Court Primary School",
    address: "Spencer Road, Wembley, HA0 3SF",
    postcode: "HA0 3SF",
    type: "Community",
    ageRange: "4–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large community primary in Wembley with strong local demand. Serves a wide Brent/Wembley catchment. Well-regarded for its size and facilities.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101497",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101497"
  },
  {
    name: "Carlton Vale Infant School",
    address: "Carlton Vale, Kilburn, London NW6 5RG",
    postcode: "NW6 5RG",
    type: "Community",
    ageRange: "3–7",
    level: "primary",
    rating: "good",
    ofstedDate: "2023",
    summary: "Infant provision in Harlesden/Kilburn with nursery and an autism resource base. Particularly useful for those needing specialist SEND support from Reception age.",
    website: "https://www.carlton.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101498"
  },
  {
    name: "Salusbury Primary School",
    address: "Salusbury Road, Kilburn, London NW6 6RG",
    postcode: "NW6 6RG",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "November 2024",
    summary: "A large, well-regarded community primary in Queen's Park with a strong reading culture and high expectations. Very popular locally with a diverse, welcoming community.",
    website: "https://www.salusbury.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101527"
  },
  {
    name: "Our Lady of Lourdes Catholic Primary School & Nursery",
    address: "Wesley Road, Harlesden, London NW10 8PP",
    postcode: "NW10 8PP",
    type: "Voluntary Aided",
    ageRange: "2–11",
    level: "primary",
    rating: "good",
    ofstedDate: "March 2025",
    summary: "Catholic primary and nursery on the Harlesden side of Willesden. Also serves St Raphael's estate families. Full provision from nursery through Year 6.",
    website: "https://www.lourdes.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101545"
  },
  {
    name: "Chalkhill Primary School",
    address: "Barnhill Road, Wembley, HA9 9YP",
    postcode: "HA9 9YP",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large Wembley community primary serving west Brent. Strong local option with broad facilities and a well-established reputation among Brent families.",
    website: "https://www.chalkhillprimaryschool.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101526"
  },
  {
    name: "Donnington Primary School",
    address: "Uffington Road, London NW10 3TL",
    postcode: "NW10 3TL",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A community primary in NW10 serving the Willesden/Harlesden borders with nursery class attached. A straightforward local option for families in the immediate catchment.",
    website: "https://www.donnington.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101520"
  },
  {
    name: "Elsley Primary School",
    address: "Tokyngton Avenue, Wembley, HA9 6HT",
    postcode: "HA9 6HT",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A strong Wembley community primary with a broad reputation and large roll. Well-regarded by local families for consistent standards and community feel.",
    website: "https://www.elsley.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101519"
  },
  {
    name: "Fryent Primary School",
    address: "Warren Lane, Kingsbury, London NW9 7LT",
    postcode: "NW9 7LT",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large Kingsbury primary serving north Brent. Worth considering for families willing to travel a bit further north-east where it has a strong local reputation.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101521",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101521"
  },
  {
    name: "Kingsbury Green Primary School",
    address: "Old Kenton Lane, Kingsbury, London NW9 9ND",
    postcode: "NW9 9ND",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A Brent community primary with a strong local catchment in Kingsbury. A solid option for families seeking a maintained primary in the area.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101503",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101503"
  },
  {
    name: "Mount Stewart Infant School",
    address: "Carlisle Gardens, Mount Stewart Avenue, Kenton, Harrow HA3 0JX",
    postcode: "HA3 0JX",
    type: "Community",
    ageRange: "4–7",
    level: "primary",
    rating: "good",
    ofstedDate: "September 2024",
    summary: "Infant school on the Brent/Harrow border. Part of the Mount Stewart federation offering a natural pathway into Reception and through to the junior school. Good early years provision.",
    website: "https://www.mountstewartinfant.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101501"
  },
  {
    name: "Mount Stewart Junior School",
    address: "Carlisle Gardens, Mount Stewart Avenue, Kenton, Harrow HA3 0JX",
    postcode: "HA3 0JX",
    type: "Community",
    ageRange: "7–11",
    level: "primary",
    rating: "good",
    ofstedDate: "March 2024",
    summary: "Junior school continuing from Mount Stewart Infant School on the Brent/Harrow border. Keeps families in a single federation from age 7-11.",
    website: "https://www.mountstewartjunior.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101500"
  },
  {
    name: "Lyon Park Primary School",
    address: "Vincent Road, Wembley, HA0 4HH",
    postcode: "HA0 4HH",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large Wembley community primary with a broad catchment. One of the key Brent primaries with well-established nursery through Year 6 provision.",
    website: "http://lyonpark.brent.sch.uk",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101506"
  },
  {
    name: "Malorees Primary School",
    address: "Christchurch Avenue, London, NW6 7PB",
    postcode: "NW6 7PB",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2021",
    summary: "A diverse, inclusive community primary in Kilburn (ages 3–11) with a strong pastoral focus and wide-ranging enrichment through music, sport, drama, and school trips. Reading and phonics are well led, and the early years foundation stage provides a solid start. The school has strong community links and a nurturing ethos — pupils feel happy, safe, and valued. SEND support is effective, and behaviour is good.",
    website: "https://www.maloreesschools.com",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101507"
  },
  {
    name: "Mora Primary School",
    address: "Mora Road, Cricklewood, London, NW2 6TD",
    postcode: "NW2 6TD",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2021",
    summary: "A Cricklewood community primary with a clear north-west London footprint. Known for green grounds and a community feel. Serves local area with nursery through Year 6 provision.",
    website: "https://www.mora.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101530"
  },
  {
    name: "Oliver Goldsmith Primary School",
    address: "Coniston Gardens, Kingsbury, London NW9 0BD",
    postcode: "NW9 0BD",
    type: "Community",
    ageRange: "3–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A Kingsbury primary with nursery and a strong local community presence. Serves Kingsbury/Queensbury area with consistent Good standards.",
    website: "https://olivergoldsmith.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101505"
  },
  {
    name: "Roe Green Infant School",
    address: "Princes Avenue, Kingsbury, London, NW9 9JL",
    postcode: "NW9 9JL",
    type: "Community",
    ageRange: "2–7",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "Infant school in Kingsbury with nursery and a rights-aware ethos. Part of a cluster with Roe Green Junior School for continuity through to Year 6.",
    website: "https://www.rgreeninf.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101512"
  },
  {
    name: "Roe Green Junior School",
    address: "Princes Avenue, Kingsbury, London, NW9 9JL",
    postcode: "NW9 9JL",
    type: "Community",
    ageRange: "7–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "Junior school completing the Roe Green pathway in Kingsbury. Keeps families in one cluster with the infant school for nursery-through-Year-6 continuity.",
    website: "https://www.rgjs.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101511"
  },
  {
    name: "St Joseph's Catholic Infant School",
    address: "Waverley Avenue, Wembley, HA9 6TA",
    postcode: "HA9 6TA",
    type: "Voluntary Aided",
    ageRange: "3–7",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "Catholic infant school in Wembley (ages 3-7) with a strong community feel. Federated with St Joseph's Catholic Junior School for a smooth Year 3 transition.",
    website: "http://www.sjinf.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101546"
  },
  {
    name: "St Joseph's Catholic Junior School",
    address: "Chatsworth Avenue, Wembley, HA9 6BE",
    postcode: "HA9 6BE",
    type: "Voluntary Aided",
    ageRange: "7–11",
    level: "primary",
    rating: "good",
    ofstedDate: "2025",
    summary: "Catholic junior school in Wembley (ages 7-11) continuing from the infant school. Ideal for families wanting Catholic primary continuity in Wembley.",
    website: "https://www.sjjnr.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101539"
  },

  // ===== SECONDARY =====
  {
    name: "Harris Lowe Academy Willesden",
    address: "Doyle Gardens, Willesden, London NW10 3ST",
    postcode: "NW10 3ST",
    type: "Academy Sponsor-led",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "November 2024",
    summary: "A popular Willesden secondary (ages 11-18) with an ambitious curriculum and strong careers programme. Pupils achieve well and feel a strong sense of belonging. Good behaviour and mutual respect. Ofsted recommends adapting KS3 curriculum to prior knowledge.",
    website: "https://www.harrislowewillesden.org.uk/",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50266194"
  },
  {
    name: "Newman Catholic College",
    address: "Harlesden Road, Brent, London NW10 3RN",
    postcode: "NW10 3RN",
    type: "Voluntary Aided",
    ageRange: "11–19",
    level: "secondary",
    rating: "good",
    ofstedDate: "May 2022",
    summary: "A friendly, safe Catholic secondary in Harlesden (ages 11-19). Broad, well-checked curriculum with good SEND support and strong wider development. Working on greater ambition in English.",
    website: "http://www.ncc.brent.sch.uk",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/101564"
  },
  {
    name: "Queens Park Community School",
    address: "Aylestone Avenue, London NW6 7BQ",
    postcode: "NW6 7BQ",
    type: "Academy Converter",
    ageRange: "11–19",
    level: "secondary",
    rating: "good",
    ofstedDate: "January 2025",
    summary: "A warm, inclusive secondary (ages 11-19) right in Queen's Park. Broad, high-quality curriculum with strong subject knowledge. Excellent pastoral care and inclusive SEND provision. Some inconsistency in checking pupils' work across subjects.",
    website: "http://www.qpcs.brent.sch.uk",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/138609"
  },
  {
    name: "North Brent School",
    address: "Neasden Lane, London NW10 2UF",
    postcode: "NW10 2UF",
    type: "Academy Free School",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "March 2024",
    summary: "A newer free school in Neasden (ages 11-18) with an ambitious curriculum. Outstanding behaviour and attitudes. Pupils are proud, happy, and achieving well with supportive teachers and clear routines. Rich enrichment. SEND consistency being improved.",
    website: "https://www.northbrentschool.co.uk/",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50245565"
  },
  {
    name: "Convent of Jesus and Mary Language College",
    address: "Crownhill Road, London NW10 4EP",
    postcode: "NW10 4EP",
    type: "Academy Converter",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "April 2013",
    summary: "A Catholic girls' secondary (ages 11-18) in Harlesden. Good teaching and outstanding behaviour and safety. Strong pastoral support. Working on ensuring high-achieving students make maximum progress.",
    website: "http://cjmlc.co.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/2269437"
  },
  {
    name: "JFS",
    address: "The Mall, Kenton, Harrow, HA3 9TE",
    postcode: "HA3 9TE",
    type: "Academy",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A major Jewish secondary in Kenton (ages 11-18) serving Brent families with a very large intake. Broad curriculum with sixth form. Strong local prominence and community links.",
    website: "https://www.jfs.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/133724"
  },
  {
    name: "Kingsbury High School",
    address: "Princes Avenue, Kingsbury, London, NW9 9JR",
    postcode: "NW9 9JR",
    type: "Community",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "2024",
    summary: "A large Brent secondary with sixth form in Kingsbury (ages 11-18). Broad community role serving north Brent families. Well-established with good transport links.",
    website: "https://www.kingsburyhigh.org.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/137685"
  },
  {
    name: "Michaela Community School",
    address: "North End Road, Wembley, HA9 0UU",
    postcode: "HA9 0UU",
    type: "Free school",
    ageRange: "11–19",
    level: "secondary",
    rating: "outstanding",
    ofstedDate: "2025",
    summary: "A high-profile Wembley free school (ages 11-19) known for very strong academic outcomes and a highly structured culture. Often oversubscribed. Distinctive approach that suits some families very well.",
    website: "https://michaela.education/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/28/140862"
  },
  {
    name: "Preston Manor School",
    address: "Carlton Avenue East, Wembley, Middlesex, HA9 8NA",
    postcode: "HA9 8NA",
    type: "Academy",
    ageRange: "3–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A well-known all-through Brent school (ages 3-18) with lower and upper sites. Broad local reputation covering nursery through to sixth form in Wembley.",
    website: "https://www.preston-manor.com/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/28/136506"
  },
  {
    name: "St Claudine's Catholic School for Girls",
    address: "Crownhill Road, Harlesden, London NW10 4EP",
    postcode: "NW10 4EP",
    type: "Academy Converter",
    ageRange: "11–18",
    level: "secondary",
    rating: "outstanding",
    ofstedDate: "2025",
    summary: "An outstanding girls' Catholic secondary (ages 11-18) in Harlesden. Strong local reputation and established school community. Excellent outcomes in a faith-based environment.",
    website: "https://www.stclaudines.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/137994"
  },
  {
    name: "Wembley High Technology College",
    address: "East Lane, North Wembley, HA0 3NT",
    postcode: "HA0 3NT",
    type: "Academy",
    ageRange: "11–18",
    level: "secondary",
    rating: "good",
    ofstedDate: "2025",
    summary: "A large Wembley secondary and sixth form (ages 11-18) for families across north-west London. Known for Good standards and a broad curriculum with technology focus.",
    website: "https://www.whtc.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/23/138457"
  },
  {
    name: "Ark Academy",
    address: "Forty Avenue, Wembley, Middlesex, HA9 9JR",
    postcode: "HA9 9JR",
    type: "Academy",
    ageRange: "3–18",
    level: "secondary",
    rating: "outstanding",
    ofstedDate: "2025",
    summary: "A Wembley all-through school (ages 3-18) with sixth form. Part of the Ark network offering consistency and strong outcomes across the full age range.",
    website: "https://arkacademy.org/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/28/135600"
   },

   // ===== SPECIAL =====
  {
    name: "The Village School",
    address: "Grove Park, Kingsbury, London NW9 0JY",
    postcode: "NW9 0JY",
    type: "Special",
    ageRange: "3–19",
    level: "special",
    rating: "good",
    ofstedDate: "2025",
    summary: "A Kingsbury special school (ages 3-19) for pupils with severe and profound learning difficulties. Strong local reputation with dedicated staff and good facilities. Key Brent specialist provision.",
    website: "https://www.thevillage.compasslp.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/25/101580"
  },
  {
    name: "Phoenix Arch School",
    address: "Drury Way, London NW10 0NQ",
    postcode: "NW10 0NQ",
    type: "Community Special",
    ageRange: "4–11",
    level: "special",
    rating: "good",
    ofstedDate: "2025",
    summary: "A Brent special school in NW10 for autistic children (ages 4-11). Specialist autism provision with tailored support and small class sizes. Clear local referral route.",
    website: "https://www.phoenixarchschool.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/25/101581"
  },
  {
    name: "Woodfield School",
    address: "Glenwood Avenue, Kingsbury, London NW9 7LY",
    postcode: "NW9 7LY",
    type: "Special",
    ageRange: "11–19",
    level: "special",
    rating: "outstanding",
    ofstedDate: "2025",
    summary: "An outstanding Kingsbury special school (ages 11-19) for pupils with wide-ranging learning needs including autism. Excellent outcomes and exceptional support.",
    website: "https://www.woodfield.compasslp.co.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/25/101582"
  },
  {
    name: "Hay Lane School",
    address: "Hay Lane, Kingsbury, London NW9 0NB",
    postcode: "NW9 0NB",
    type: "Special",
    ageRange: "4–19",
    level: "special",
    rating: "good",
    ofstedDate: "2025",
    summary: "A Brent special school in Kingsbury serving pupils with severe and profound learning difficulties. Specialist provision with strong staff-to-pupil ratios and tailored programmes.",
    website: "https://www.brent.gov.uk/children-young-people-and-families/send-local-offer/education/specialist-schools",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/25/101579"
  },
  {
    name: "Manor School",
    address: "Chamberlayne Road, Kensal Rise, London NW10 3NT",
    postcode: "NW10 3NT",
    type: "Academy Special Converter",
    ageRange: "4–11",
    level: "special",
    rating: "outstanding",
    ofstedDate: "January 2020",
    summary: "An outstanding special school in Willesden for pupils with autism spectrum disorder. Staff support every pupil to achieve their potential with highly individualised programmes and excellent facilities.",
    website: "https://www.manor.brent.sch.uk",
    ofstedUrl: "https://files.ofsted.gov.uk/v1/file/50146961"
  }
];

// ---- Icons ----
const icons = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>'
};

// ---- Build a school card ----
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
  const raw = String(url || '');
  if (!raw || raw.includes('*')) return '';
  if (/favicon|apple-touch-icon|\.ico(?:\?|$)/i.test(raw)) return '';
  try {
    return new URL(raw, baseUrl).href;
  } catch {
    return '';
  }
}

function logoUrlForSchool(school) {
  const explicit = resolveExplicitLogo((window.WF_SCHOOL_LOGOS && window.WF_SCHOOL_LOGOS[school.name]) || (window.WF_LOGOS && window.WF_LOGOS[school.name]), school.website || window.location.href);
  if (explicit) return explicit;
  const host = normalizeHost(school.website);
  if (!host) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
}

function initialsForSchool(name) {
  const parts = String(name || '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);
  const pick = parts.slice(0, 2).map(part => part[0]).join('');
  return (pick || 'S').toUpperCase();
}

function renderSchoolBrandMark(school) {
  const logo = logoUrlForSchool(school);
  const initials = initialsForSchool(school.name);
  return `
    <div class="school-brandmark ${logo ? '' : 'brandmark-fallback'}" aria-hidden="true">
      ${logo ? `<img class="school-brandmark-img" src="${logo}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.school-brandmark').classList.add('brandmark-fallback');this.remove();">` : ''}
      <span class="school-brandmark-fallback-text">${initials}</span>
    </div>
  `;
}

function summarySentences(summary) {
  return String(summary || '')
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(sentence => sentence.trim().replace(/[.;:]+$/u, ''))
    .filter(Boolean);
}

function schoolHighlights(school) {
  if (Array.isArray(school.highlights) && school.highlights.length) {
    return school.highlights.filter(Boolean).slice(0, 3);
  }

  const sentences = summarySentences(school.summary);
  if (!sentences.length) return [];

  const highlights = [];
  const add = (text) => {
    const clean = String(text || '').trim();
    if (clean && !highlights.includes(clean)) highlights.push(clean);
  };

  // Skip the first sentence — it's already shown as the summary above
  if (sentences.length === 1) {
    add(sentences[0]);
  } else {
    if (sentences[1]) add(sentences[1]);
    if (sentences.length > 2) add(sentences[sentences.length - 1]);
    if (sentences.length > 3) add(sentences[sentences.length - 2]);
  }

  return highlights.slice(0, 3);
}

function buildSchoolCard(school) {
  const card = document.createElement('div');
  card.className = 'school-card';
  card.dataset.level = school.level;
  card.dataset.rating = school.rating;

  card.innerHTML = `
    <div class="school-card-header">
      <div class="school-title-wrap">
        ${renderSchoolBrandMark(school)}
        <h3 class="school-name">${school.name}</h3>
      </div>
      <span class="school-rating-tag ${school.rating}">${school.rating}</span>
    </div>
    <div class="school-meta">
      <span class="school-meta-tag">${icons.users} ${school.ageRange}</span>
      <span class="school-meta-tag">${icons.book} ${school.type}</span>
      <span class="school-meta-tag">${icons.calendar} Ofsted ${school.ofstedDate}</span>
    </div>
    <div class="school-detail-row">
      ${icons.pin}
      <span>${school.address}</span>
    </div>
    <p class="school-summary">${school.summary}</p>
    <div class="school-highlights">
      <p class="school-highlights-label">Ofsted highlights</p>
      <ul class="school-highlights-list">
        ${schoolHighlights(school).map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <button class="school-expand-btn" onclick="this.closest('.school-card').classList.toggle('expanded'); this.textContent = this.closest('.school-card').classList.contains('expanded') ? 'Show less' : 'Read more';">Read more</button>
    <div class="school-footer">
      <a href="${school.website}" target="_blank" rel="noopener noreferrer" class="school-link">
        School website ${icons.external}
      </a>
      <a href="${school.ofstedUrl}" target="_blank" rel="noopener noreferrer" class="school-link ofsted-link">
        Ofsted report ${icons.clipboard}
      </a>
    </div>
  `;
  return card;
}

// ---- Populate grids ----
function populateGrids() {
  const outstandingPrimary = schools.filter(s => s.level === 'primary' && s.rating === 'outstanding');
  const goodPrimary = schools.filter(s => s.level === 'primary' && s.rating === 'good');
  const secondary = schools.filter(s => s.level === 'secondary');
  const special = schools.filter(s => s.level === 'special');

  const grids = {
    'outstanding-primary-grid': outstandingPrimary,
    'good-primary-grid': goodPrimary,
    'secondary-grid': secondary,
    'special-grid': special
  };

  Object.entries(grids).forEach(([id, list]) => {
    const grid = document.getElementById(id);
    if (!grid) return;
    grid.innerHTML = '';
    list.forEach(school => grid.appendChild(buildSchoolCard(school)));
  });
}

function updateHeroStats() {
  const totalSchools = schools.length;
  const outstandingSchools = schools.filter(s => s.rating === 'outstanding').length;
  const goodSchools = schools.filter(s => s.rating === 'good').length;

  const statTotal = document.getElementById('stat-total');
  const statOutstanding = document.getElementById('stat-outstanding');
  const statGood = document.getElementById('stat-good');

  if (statTotal) statTotal.textContent = totalSchools;
  if (statOutstanding) statOutstanding.textContent = outstandingSchools;
  if (statGood) statGood.textContent = goodSchools;
}

// ---- Filtering ----
let activeSchoolFilter = 'all';
let activeRatingFilter = null;

function applyFilters() {
  const sections = {
    'outstanding-primary': { level: 'primary', rating: 'outstanding' },
    'good-primary': { level: 'primary', rating: 'good' },
    'secondary': { level: 'secondary', rating: null },
    'special': { level: 'special', rating: null }
  };

  let anyVisible = false;

  Object.entries(sections).forEach(([sectionId, config]) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let show = true;

    // Type filter
    if (activeSchoolFilter !== 'all') {
      if (activeSchoolFilter !== config.level) show = false;
    }

    // Rating filter
    if (activeRatingFilter) {
      if (config.rating && config.rating !== activeRatingFilter) show = false;
      // For secondary/special sections, check if any card matches
      if (!config.rating) {
        const sectionSchools = schools.filter(s => s.level === config.level);
        const hasMatch = sectionSchools.some(s => s.rating === activeRatingFilter);
        if (!hasMatch) show = false;
      }
    }

    section.classList.toggle('section-hidden', !show);
    if (show) anyVisible = true;

    // Also filter individual cards within sections if rating filter is active
    if (show && activeRatingFilter) {
      const gridId = sectionId.replace('outstanding-primary', 'outstanding-primary-grid')
                               .replace('good-primary', 'good-primary-grid')
                               .replace('secondary', 'secondary-grid')
                               .replace('special', 'special-grid');
      const grid = document.getElementById(gridId + (gridId.endsWith('-grid') ? '' : '-grid'));
      if (grid) {
        Array.from(grid.children).forEach(card => {
          const match = card.dataset.rating === activeRatingFilter;
          card.style.display = match ? '' : 'none';
        });
      }
    } else if (show) {
      const gridId = sectionId + '-grid';
      const grid = document.getElementById(gridId);
      if (grid) {
        Array.from(grid.children).forEach(card => card.style.display = '');
      }
    }
  });

  const noResults = document.getElementById('no-results-schools');
  if (noResults) noResults.classList.toggle('hidden', anyVisible);
}

// ---- Filter event listeners ----
document.querySelectorAll('[data-school-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-school-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSchoolFilter = btn.dataset.schoolFilter;
    applyFilters();
  });
});

document.querySelectorAll('[data-rating-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      activeRatingFilter = null;
    } else {
      document.querySelectorAll('[data-rating-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRatingFilter = btn.dataset.ratingFilter;
    }
    applyFilters();
  });
});

// ---- Dark mode ----
const themeToggle = document.querySelector('[data-theme-toggle]');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    themeToggle.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
  });
}

// ---- Header scroll ----
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ---- Init ----
populateGrids();
updateHeroStats();
