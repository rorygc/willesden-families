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
    summary: "Pupils thrive in a close, welcoming community with a rich, ambitious curriculum that builds deep knowledge and prepares them exceptionally well for future education, including those with SEND. Behaviour is exemplary from early years, with high motivation, respect, and attendance. Provision for pupils' personal development is exceptional through diverse enrichment, responsibilities, and community support.",
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
    summary: "Outstanding across all categories, with a highly ambitious and well-sequenced curriculum that ensures pupils, including those with SEND, achieve exceptionally well. Pupils demonstrate exemplary behaviour, positive attitudes to learning, and thrive in a nurturing environment enriched by trips, clubs, and community contributions. No areas for improvement identified.",
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
    summary: "Rated Outstanding across all inspection categories, including quality of education, behaviour and attitudes, personal development, leadership and management, and early years provision. Inspectors noted no areas for improvement, reflecting the school's strong performance following its academy conversion.",
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
    summary: "Highly ambitious curriculum that captures pupils' interests, with strong emphasis on reading and phonics, effective support for pupils with SEND, exemplary behaviour, and robust personal development. Early years provision, leadership, and safeguarding are all outstanding. No areas for improvement were identified.",
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
    summary: "Pupils are very happy, behave exceptionally well, and achieve high academic outcomes due to an ambitious, well-implemented curriculum that builds knowledge securely across mathematics, reading, and writing. Pupils with SEND are well-supported, attendance is high, and the school provides rich opportunities for leadership, clubs, and community involvement. No areas for improvement identified.",
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
    summary: "Rated Outstanding across all categories. Key strengths include an ambitious curriculum with strong phonics and reading teaching, exemplary pupil behaviour, effective support for pupils with SEND, and an exceptional personal development programme that fosters confidence and empathy. No areas for improvement are identified.",
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
    summary: "Outstanding in all inspected areas, with a broad, ambitious curriculum where pupils' knowledge builds securely, excellent support for pupils with SEND, strong emphasis on reading and phonics, and exceptional personal development opportunities. No areas for improvement were identified.",
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
    summary: "An ambitious and creative curriculum that builds pupils' knowledge over time, a high priority on reading with an effective phonics programme, strong support for pupils with SEND, and broad opportunities for personal development. Areas for improvement involve training less experienced staff in phonics delivery and refining key vocabulary.",
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
    summary: "A nurturing, inclusive environment with an ambitious curriculum and strong reading and early years provision. Leaders have high expectations for behaviour and learning, supported by effective safeguarding and positive parental feedback. Improvements are needed in embedding curriculum checks in newer subjects and refining support for SEND pupils.",
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
    summary: "Effective action to maintain good standards. Pupils are nurtured, safe, well-behaved, happy, and achieve well across a well-designed curriculum with strong support for those with SEND and in early reading. Leaders should provide more opportunities for pupils to practise oracy and speaking skills.",
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
    summary: "Pupils are happy, safe, and achieving well due to an ambitious curriculum, effective phonics teaching, strong SEND support, and positive behaviour. The diverse community thrives with respect and high expectations. The main area for improvement is ensuring all pupils retain key knowledge for future learning.",
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
    summary: "A diverse community where pupils behave well, work hard, and achieve strongly in reading thanks to a well-sequenced curriculum and high teacher expectations. Effective support for struggling readers and SEND pupils, strong safeguarding, and leadership improvements. Areas for improvement involve refining curriculum precision in some subjects.",
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
    summary: "Pupils achieve well with an ambitious curriculum, strong behaviour, effective early reading and phonics support, and well-planned provision for SEND pupils. Areas for improvement include ensuring better curriculum sequencing in some subjects and strengthening the coherence of broader development opportunities.",
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
    summary: "Rated Good in all inspected categories: quality of education, behaviour and attitudes, personal development, leadership and management, and early years provision. The school demonstrates consistently good standards across all areas.",
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
    summary: "Pupils enjoy coming to school every day, feeling happy and safe due to caring adults who know them well. Key strengths include effective leadership and a positive school atmosphere with strong community values.",
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
    summary: "Leaders prioritize reading with a strong phonics programme, well-sequenced curriculum in most subjects, effective support for SEND pupils and early years, and positive pupil behaviour. In a few subjects, leaders should refine curriculum thinking to ensure teachers know what pupils need to learn and remember.",
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
    summary: "An ambitious curriculum, strong safeguarding, and effective support for pupils with SEND. Strengths include pupils' enthusiasm for reading, high expectations for learning, positive behaviour, and focus on wider development like tolerance and teamwork. The key area for improvement is using assessment to address misconceptions more swiftly.",
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
    summary: "Good overall with Outstanding ratings for behaviour and attitudes, personal development, and early years provision. Excellent pupil behaviour, an ambitious curriculum leading to well above national average outcomes in English and maths at Year 6. Leaders foster a vibrant, inclusive community where pupils feel safe.",
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
    summary: "A broad, ambitious curriculum with strong phonics teaching and excellent support for pupils with SEND, fostering a friendly community where pupils behave well, feel safe, and benefit from enriching wider opportunities. Staff expertise is high, and safeguarding is effective.",
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
    summary: "Pupils have positive attitudes to learning, exemplary behaviour, and feel safe, with leaders providing a broad ambitious curriculum, strong phonics and reading support, and effective SEND provision. Pupils benefit from enriching activities and community engagement. In a few subjects, strategies to deepen understanding are not yet fully embedded.",
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
    summary: "Maintains its Good judgement with evidence suggesting it could be Outstanding if graded. Key strengths include an ambitious curriculum leading to high pupil achievement, exceptional reading provision and phonics teaching, excellent behaviour and attendance, and strong support for pupils with SEND. No areas for improvement were identified.",
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
    summary: "A local community primary in Cricklewood with nursery provision and a clear neighbourhood catchment.",
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
    summary: "A large Brent community primary with a broad intake and strong local relevance for families further south/east of Willesden.",
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
    summary: "A big community primary serving the wider Brent/Wembley area with strong local demand for places.",
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
    summary: "Infant provision with nursery and an autism resource base, useful for families prioritising early years continuity.",
    website: "https://www.carlton.brent.sch.uk/",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101498"
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
    summary: "A large Wembley community primary and an important local option for Brent families west/south-west of Willesden.",
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
    summary: "A local NW10 community primary with nursery class and a straightforward fit for Willesden families.",
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
    summary: "A strong Wembley community primary with a broad reputation and a large roll.",
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
    summary: "A large Kingsbury primary that matters for families willing to travel a bit further north-east in Brent.",
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
    summary: "A Brent community primary with a strong local catchment in Kingsbury.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101503",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/21/101503"
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
    summary: "A large Wembley community primary and one of the key Brent schools for local family planning.",
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
    ofstedDate: "2026",
    summary: "The merged Malorees primary school serving the wider Brondesbury/Kilburn area.",
    website: "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/101507",
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
    ofstedDate: "2025",
    summary: "A Cricklewood community primary with a clear north-west London footprint.",
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
    summary: "A Kingsbury primary with nursery and a strong local community presence.",
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
    summary: "Infant provision in Kingsbury with nursery and a rights-aware ethos.",
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
    summary: "Junior continuation at the Roe Green site, keeping families in one local cluster.",
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
    summary: "Catholic infant provision in Wembley with a strong community and federation with the junior school.",
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
    summary: "Junior school linked to the infant school, useful for families wanting continuity in Wembley.",
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
    summary: "Pupils achieve well and are prepared successfully for their next academic steps due to an ambitious curriculum, positive behaviour, and a comprehensive careers programme. The school fosters a sense of belonging, mutual respect, and ambition. Leaders should ensure the KS3 curriculum is better adapted to pupils' prior knowledge and provide more support for early readers.",
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
    summary: "Pupils enjoy a friendly, safe environment with positive relationships and good behaviour. The curriculum is broad and effectively checked, with good support for SEND pupils and strong wider development. Areas for improvement include greater ambition and sequencing in the English curriculum.",
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
    summary: "A warm, inclusive environment where pupils feel safe and supported, with a broad, high-quality curriculum that fosters strong subject knowledge and high achievement for SEND pupils. Behaviour and pastoral care are strong. Areas for improvement include inconsistent checks on pupils' work and embedding the new behaviour system.",
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
    summary: "Highly ambitious curriculum with outstanding behaviour and attitudes and exceptional personal development. Pupils are proud, happy, safe, and achieving well due to supportive teachers, clear routines, and enriching activities. Some pupils with SEND do not receive fully consistent support.",
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
    summary: "Students make good progress with generally good teaching and outstanding behaviour and safety. Strong leadership and pastoral support contribute to high attendance and excellent conduct. Areas for improvement include ensuring high-achieving students make maximum progress and improving assessment consistency.",
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
    summary: "A major Jewish secondary school serving Brent families in Kenton, with a very large intake and strong local prominence.",
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
    summary: "A large Brent secondary with a sixth form and a broad community role in Kingsbury.",
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
    summary: "A high-profile Wembley free school with a reputation for very strong academic outcomes and a highly structured culture.",
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
    summary: "A well-known all-through Brent school with lower and upper sites and a broad local reputation.",
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
    summary: "A girls' Catholic secondary in Harlesden with a strong local reputation and a long-established school community.",
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
    summary: "A large Wembley secondary and sixth form with strong local relevance for families across north-west London.",
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
    summary: "An all-through Wembley school with a sixth form and a broad catchment across Brent.",
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
    summary: "Special school on the former Grove Park site, serving pupils with SEND and a strong Brent-specific role.",
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
    summary: "Brent special school for autistic children, with a clear local referral route through the council.",
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
    summary: "Special school in Kingsbury for pupils with a wide range of learning needs, including autism and moderate learning difficulties.",
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
    summary: "A Brent special school serving pupils with severe and profound learning difficulties.",
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
    summary: "An outstanding special school for pupils with autism spectrum disorder, where staff support every pupil to achieve their full potential through tailored learning pathways, high expectations, and a focus on independence and life skills. Exceptional reading provision, excellent behaviour, and rich personal development opportunities. No areas for improvement identified.",
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
  if (!url || String(url).includes('*')) return '';
  try {
    return new URL(url, baseUrl).href;
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
