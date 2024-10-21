const db = require('../db')
const { Pattern } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const patterns = [
    {
        title: 'Sybil Trench Coat',
        brand: 'Vikisews',
        description: `Sybil is a single-breasted trench coat with a loose fit, a straight silhouette and a partial lining. The turn-down collar and the cuffs are made out of ribbing...`,
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: `To sew the Sybil trench coat, choose raincoat or outerwear fabrics with the following properties:...`,
        hashtags: ['#vikisews_sybil'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/e7/51/e751b0bc19843776f29941a207e9e204.jpg',
        patternLink: 'https://vikisews.com/vykrojki/outerwear/sybil-trench-coat/',
        patternType: 'Trench coat'
    },
    {
        title: 'Aspen Trench Coat (Boy)',
        brand: 'Vikisews',
        description: `Aspen is an oversized trench coat with a straight silhouette...`,
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Child',
        bodyType: 'Masculine',
        fabricTypes: 'Woven',
        fabricSuggestions: `To sew this trench coat, choose woven fabrics with the following properties:...`,
        hashtags: ['#vikisews_aspen'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/81/66/8166c3c21964075977dd9ff0084a25f9.jpg',
        patternLink: 'https://vikisews.com/vykrojki/children-patterns/aspen-trench-coat-boy/',
        patternType: 'Coat'
    },
    {
        title: 'Solange Blazer',
        brand: 'Vikisews',
        description: 'Solange is a single-breasted, semi-fitted blazer with an accentuated waist...',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this blazer, choose suiting fabrics with the following properties:...',
        hashtags: ['#vikisews_solange'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/96/69/96695763cbb438b0dbff98e7ad4c1d71.jpg',
        patternLink: 'https://vikisews.com/vykrojki/blazers-and-vests/solange-blazer/',
        patternType: 'Blazer'
    },
    {
        title: 'Marla Dress',
        brand: 'Vikisews',
        description: 'Marla is a close-fitting dress featuring waist and under the bust seams...',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this dress, choose dress-weight fabrics with the following properties:...',
        hashtags: ['#vikisews_marla'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/7e/fa/7efae340e45e26cbd7d08ebfa5416a83.jpg',
        patternLink: 'https://vikisews.com/vykrojki/dresses/marla-dress/',
        patternType: 'Dress'
    },
    {
        title: 'Chiara Blouse',
        brand: 'Vikisews',
        description: 'Chiara is a tight-fitting corset top with separate bust cups...',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this garment, choose blouse and dress-weight fabrics with the following properties:...',
        hashtags: ['#vikisews_chiara'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/db/ce/dbce2838251c36c91a1430d58ce48e9f.jpg',
        patternLink: 'https://vikisews.com/vykrojki/shirts-t-shirts-blouses/chiara-blouse/',
        patternType: 'Blouse'
    },
    {
        title: 'Ornella Dress',
        brand: 'Vikisews',
        description: 'Ornella is a close-fitting evening gown with a waist seam and adjustable straps. The corset bodice of the dress features separate cups pleated at the bottom. The cups are supported with underwires. The front, back and side seams of the bodice feature rigilene boning inserted into applied channels. The skirt is bias-cut and flared toward the bottom. The front of the dress is floor-length while the back extends into a long train. The dress closes with an invisible zipper inserted into the center back seam and topped with a hook-and-eye.',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this dress, choose dress-weight fabrics with the following properties: - medium weight, with good drape, soft, non-stretch or with very little stretch, opaque - the fiber content can include natural fibers (silk, cotton, linen), artificial fibers (viscose), blends (cotton + silk, silk + polyester, cotton + viscose, etc.), and synthetics (polyester, polyester + elastane) - we recommend using the following fabrics: dress-weight silk, crepe, satin. Attention! We do not recommend stretchy knit fabrics and crisp, structured fabrics (organza, cotton). For the lining, we recommend using artificial fibers (viscose), blends (viscose + elastane, viscose + polyester), and synthetics (polyester, polyester + elastane). The garment in the photo is made of dress-weight crepe. The fabric is lightweight, soft, flowy, with good drape and very little stretch. The fiber content is 100% silk. The lining is 100% silk.',
        hashtags: ['#vikisews_Ornella'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/e2/29/e229d2680433ea7a314e40c79565db97.jpg',
        patternLink: 'https://vikisews.com/vykrojki/dresses/ornella-dress/',
        patternType: 'Dress'
    },
    {
        title: 'Gladys Coat',
        brand: 'Vikisews',
        description: 'Gladys is a semi-fitted, straight-cut, fully lined coat featuring a detachable belt. The shaping of the coat is achieved with a center back seam, as well as with princess seams on the back and front. There is a shaped yoke on the back. The center back seam is finished with a vent. The front of the coat features a rectangular-shaped storm flap attached to the shoulder seam, as well as to the armscye of the garment. There are horizontal seams above the knee, which run across the front and back of the garment. Gladys features decorative topstitching along the main seams. The classic stand-collar features rectangular-shaped lapels. The coat has welt pockets at the hip level and long, set-in, two-piece sleeves. It has a center front closure, featuring buttons and bound buttonholes. Gladys is below-knee length.',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this coat, choose fabrics with the following properties: - medium-weight, durable, non-stretch or low-stretch, opaque - the fabric content can include natural (wool, cotton, linen), artificial (viscose), blends (man-made silk + polyurethane + elastane, cotton + polyester, cotton + viscose, etc.), and synthetic fibers (polyester + polyurethane, polyester + elastane) - the following fabrics are recommended: faux leather, denim, corduroy, blended raincoat fabrics, thick cotton gabardine. Attention! We do not recommend very stretchy knit materials (jersey fabric) and lightweight sheer fabrics (chiffon, stretch lace). For the lining, choose lining fabrics made of artificial (viscose), blends (viscose + elastane, viscose + polyester), and synthetic fibers (polyester, polyester + elastane). The coat in the photo is made of faux leather. This fabric is medium-weight, pliable, and has little stretch. The fiber content is a blend of man-made silk, polyurethane and elastane. The lining is 100% viscose.',
        hashtags: ['#vikisews_gladys'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/a5/b2/a5b217952060380b7c615adbd9eccec7.jpg',
        patternLink: 'https://vikisews.com/vykrojki/outerwear/gladys-coat/',
        patternType: 'Coat'
    },
    {
        title: 'Liliana Vest',
        brand: 'Vikisews',
        description: 'Liliana is a semi-fitted vest. Its bust darts have been transferred to the princess seams and the double welt pocket line. The back features shoulder darts and princess seams, as well as tabs that fasten with a D-ring to further cinch in the waist. The back hem features an inverted V-shaped detail. The vest has a center fastening with four buttons and buttonholes, and is fully lined. Liliana is high-hip length.',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew this vest, choose woven fabrics with the following properties: - Medium weight, soft, structured, non-stretch or with very little stretch; - The fiber content can include natural fibers (wool, silk, cotton, linen), artificial (viscose), blends (wool + silk, wool + polyester, cotton + viscose, etc.), and synthetic (polyester, polyester + elastane); - The following fabrics are recommended: wool suiting, cotton, linen, crepe, gabardine, denim; - For the lining, we recommend artificial fibers (viscose), blends (viscose + elastane, viscose + polyester), or synthetic fibers (polyester, polyester + elastane); - The vest in the photo is made of 100% linen. This material is soft and non-stretch. The lining is 100% viscose.',
        hashtags: ['#vikisews_liliana'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/22/18/2218e1f04c03a25905726ebe0724c1e9.jpg',
        patternLink: 'https://vikisews.com/vykrojki/blazers-and-vests/liliana-vest/',
        patternType: 'Vest'
    },
    {
        title: 'Daphna Trousers',
        brand: 'Vikisews',
        description: 'Daphna is a pair of loose-fitting, straight-cut palazzo trousers with pressed creaselines on the front and back. At the waist, there are two soft pleats facing the center on each side of the front. The back features waist darts. There are functional pockets in the side seams. The trousers have an applied waistband with belt loops. The upper edge of the waistband sits at the natural waistline. Daphna fastens with a fly front zipper, as well as with a hook-and-bar. The trousers are floor-length.',
        skillLevel: 'Beginner',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'To sew these trousers, choose suiting fabrics with the following properties: - medium-weight, pliable, breathable, non-stretch or low-stretch, opaque - the fabric content can include natural (wool, silk, cotton, linen), artificial (viscose), blends (wool + silk, wool + polyester, cotton + viscose, etc.), and synthetic fibers (polyester, polyester + elastane) - the following fabrics are recommended: wool suiting, gabardine, denim, tweed, corduroy, linen, twill, wool crepe. We do not recommend very stretchy knit materials (jersey fabric) and lightweight sheer fabrics (chiffon, organza, stretch lace). For the lining choose lining fabric which includes artificial (viscose), blends (viscose + elastane, viscose + polyester, etc.), and synthetic fibers (polyester, polyester + elastane). The trousers in the photo are made of suiting fabric. This fabric is medium-weight, pliable, soft, and has little stretch. The fiber content is a blend of polyester, viscose and spandex. The lining is viscose + polyester.',
        hashtags: ['#vikisews_daphna'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/19/60/19602bca60187fd9d644bb1fb69588c1.jpg',
        patternLink: 'https://vikisews.com/vykrojki/pants-and-shorts/daphna-trousers/',
        patternType: 'Pants, trousers'
    },
    {
        title: 'Irene Jumpsuit (Boy)',
        brand: 'Vikisews',
        description: 'Irene is a semi-fitted jumpsuit with a cinched waist. The front features patch pockets at the bustline and hipline, welt zipper pockets, yoke details, and a box pleat below the back yoke. It has a stand collar, a center front zipper concealed with a placket, and fastens with two snap fasteners. The long sleeves and pants have elastic casings. Ankle length.',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF',
        ageGroup: 'Child',
        bodyType: 'Masculine',
        fabricTypes: 'Knit',
        fabricSuggestions: 'Choose woven fabrics with medium weight, softness, and stretch. Recommended fabrics: corduroy, denim, blends containing elastane. The jumpsuit is made of denim, a medium weight, soft, stretchy blend of cotton and elastane.',
        hashtags: ['#vikisews_irene'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/eb/a5/eba5b925a02e7b53860292a7d2517611.jpg',
        patternLink: 'https://vikisews.com/vykrojki/children-patterns/irene-boy/',
        patternType: 'Jumpsuit'
    },
    {
        title: 'Sam Pants (Girl)',
        brand: 'Vikisews',
        description: 'Sam is a pair of straight, loose-fitting pants with an applied waistband at the natural waistline. The waistband is gathered with elastic, featuring two rows of topstitching. It includes two side seam pockets and two knee-level patch pockets with diagonal openings. Ankle-length with elasticated hems.',
        skillLevel: 'Beginner',
        patternFormat: 'PDF',
        ageGroup: 'Child',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'Choose soft, breathable, medium-weight knit fabrics, such as thick French terry or sweatshirt fleece. The garment is made of sweatshirt fleece, which is medium-weight and low-stretch, with a cotton and polyester blend.',
        hashtags: ['#vikisews_sam'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/68/61/6861032d9f2bb26d9fb3a215d2b6155a.jpg',
        patternLink: 'https://vikisews.com/vykrojki/children-patterns/sam-girl/',
        patternType: 'Pants, trousers'
    },
    {
        title: 'Aspen Trench Coat (Girl)',
        brand: 'Vikisews',
        description: 'Aspen is an oversized trench coat with a straight silhouette, featuring a storm flap, single welt pockets, a box pleat at the back, and decorative topstitching. The trench has a turn-down collar, removable tie belt, and fastens with buttons. Below-the-knee length.',
        skillLevel: 'Advanced',
        patternFormat: 'PDF',
        ageGroup: 'Child',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'Choose medium weight, strong, breathable woven fabrics like blended raincoat fabrics, cotton gabardine, or denim. The coat is made of cotton gabardine, and the lining is 100% viscose.',
        hashtags: ['#vikisews_aspen'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/f5/90/f590a0124eb3274df429dba9faa87ef6.jpg',
        patternLink: 'https://vikisews.com/vykrojki/children-patterns/aspen-trench-coat-girl/',
        patternType: 'Coat'
    },
    {
        title: 'Celine Dress',
        brand: 'Vikisews',
        description: 'Celine is a loose-fitting A-line tiered dress with double straps. It features casings above and below the bust threaded with ties for gathering. The dress is above-ankle length.',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'Choose medium weight, soft dress-weight fabrics with good drape. Recommended fabrics: dress-weight viscose, silk, cotton, poplin. Avoid stretchy knits and lightweight sheers. The dress in the photo is made of textured cotton (100% cotton).',
        hashtags: ['#vikisews_celine'],
        patternImg: 'https://threadloop.app/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NzQ1MCwicHVyIjoiYmxvYl9pZCJ9fQ==--168fae60b4871ce30ec8631fa8c89784a4864158/1_product_a.jpg',
        patternLink: 'https://vikisews.com/vykrojki/dresses/celine-dress/',
        patternType: 'Dress'
    },
    {
        title: 'Heidi Playsuit',
        brand: 'Vikisews',
        description: 'Heidi is a semi-fitted playsuit cinched at the waist with front and back yokes, bust darts, and patch pockets. It features a 4-channel elastic waistband, side pockets, and fastens with buttons at the center front. Above-knee length.',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF',
        ageGroup: 'Adult',
        bodyType: 'Feminine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'Choose medium weight, opaque dress-weight fabrics. Recommended fabrics include cotton, denim, and challis. Avoid stretchy knits and lightweight sheers. The garment in the photo is made of 100% cotton.',
        hashtags: ['#vikisews_heidi'],
        patternImg: 'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/5d/33/5d333a12306cbf3769c27de68d411633.jpg',
        patternLink: 'https://vikisews.com/vykrojki/jumpsuits/heidi-playsuit/',
        patternType: 'Playsuit/romper'
    },
    {
        title: 'Zoye Pajamas',
        brand: 'Anna The Tailor',
        description: 'The shirt features piping around the neckline, pocket, and sleeves, with buttons along the front. The pants have an elastic waistband and inseam pockets, with cuff piping. Includes a shorts version.',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF',
        ageGroup: 'Adult and Teen',
        bodyType: 'Feminine',
        fabricTypes: 'Woven, Knit, and Stretch woven',
        fabricSuggestions: '',
        hashtags: ['#zoyepajamas'],
        patternImg: 'https://images.squarespace-cdn.com/content/v1/6025ba89e66c87719382027c/1721205610282-UFXEHXVDP9BGH9GHNK8R/34AF0A39-7717-4F1A-A4A4-98E6A3309A50.JPEG?format=750w',
        patternLink: 'https://www.annathetailor.com/shop-patterns-1/p/zoyepajamaspattern',
        patternType: 'Pyjamas'
    },
    {
        title: `Men's Jacket and Vest`,
        brand: 'Know Me Patterns',
        description: 'A rain jacket that combines a crop jacket and vest. The boxy fit jacket features a hood and front snap closure, while the vest has a front zipper closure. Includes zippered patch pockets and cargo pockets.',
        skillLevel: 'Intermediate',
        patternFormat: 'PDF and Paper',
        ageGroup: 'Adult',
        bodyType: 'Masculine',
        fabricTypes: 'Woven',
        fabricSuggestions: 'Use coated fabrics, nylon, or water-resistant fabrics. Lining options include cotton blends, flannel, fleece, and polyester blends.',
        hashtags: ['#me2064', '#knowme2064'],
        patternImg: 'https://cdn11.bigcommerce.com/s-154ncqg253/images/stencil/480x660/products/11180/72221/ME2064_Front__49650.1704462777.jpg?c=1',
        patternLink: 'https://simplicity.com/know-me/me2064',
        patternType: 'Jacket, Vest'
    }
]

await Pattern.insertMany(patterns)
console.log('created patterns')
}

const run = async () => {
    await main()
    db.close()
}

run()