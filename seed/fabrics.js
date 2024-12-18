const db = require('../db')
const { Fabric } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const fabrics = [
        {
            fabricName: "Olive Organic Cotton Twill",
            imageURL: "https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/F/C/FC8705.jpg", 
            type: "Woven",
            colors: "Olive",
            quantityInYds: 10,
            print: "Solid",
            stretch: true, 
            sheerness: "Opaque",
            description: "Medium weight with a cool hand and crisp drape, perfect for jackets, pants, skirts, and light upholstery. It features 100% organic cotton content and is preshrunk with a SKAL/OEKO-TEX certification for eco-friendly dyeing and finishing."
        },
        {
            fabricName: "Sweet Potato Organic Cotton Twill",
            imageURL: "https://www.moodfabrics.com/media/catalog/product/cache/5a178bed4428bf0e52465a118a06bce9/F/C/FC8706-d.jpg",
            type: "Woven",
            colors: "Orange",
            quantityInYds: 7,
            print: "Solid",
            stretch: true,
            sheerness: "Opaque",
            description: 'Medium weight twill offers a cool hand and crisp drape plus an exceptionally subtle mechanical give through the weft. Infinitely versatile, use it for jackets, trousers, skirts, and accessories, or dress up your home with light upholstery, too!'
        },
        {
            fabricName: "Antique Lavender Silk Crepe Back Satin",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/5a178bed4428bf0e52465a118a06bce9/F/S/FS23116.jpg',
            type: "Woven",
            colors: "Brown",
            quantityInYds: 10,
            print: "Solid",
            stretch: false,
            sheerness: "Opaque",
            description: "Airy and lightweight with a rippling, bouncy drape, dazzle in expertly made palazzo pants, tulip skirts, and mermaid gowns. While opaque, a lining can still be added for a professional look."
        },
        {
            fabricName: "Olive and Cream Polka Dot Silk and Viscose Crepe de Chine",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/5a178bed4428bf0e52465a118a06bce9/4/3/436486.jpg',
            type: "Woven",
            colors: "Olive, Cream",
            quantityInYds: 6,
            print: "Polka Dots",
            stretch: false,
            sheerness: "Translucent",
            description: "Elevated by a lovely luster, the olive ground with large white dots yields a soft and sleek hand - supple drape, this fabric inspires flouncy blouses, lively dresses, and luxurious pajama sets. Slightly translucent, may need lining."
        },
        {
            fabricName: "Brushed Stretch Cotton Twill Print",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/4/3/433723.jpg',
            type: "Woven",
            colors: "White, Red",
            quantityInYds: 10,
            print: "Border Print, Floral",
            stretch: true,
            sheerness: "Opaque",
            description: "Floral print - flowers, vines, and berries. 15% weft-wise stretch. Pre-washed.",
        },
        {
            fabricName: "Stretch Polyester Sweater Knit - Pink and Gray Hearts",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/5a178bed4428bf0e52465a118a06bce9/4/3/437318.jpg',
            type: "Knit",
            colors: "Pink, Gray",
            quantityInYds: 12,
            print: "Hearts",
            stretch: true,
            sheerness: "Slightly Translucent",
            description: "Cute & lightweight, fabric with a soft hand. 50% all-way stretch. Great for pajamas.",
        },
        {
            fabricName: "Cream Cotton and Polyester Ribbed Double Knit",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/4/3/432427.jpg',
            type: "Knit",
            colors: "Cream",
            quantityInYds: 4,
            print: "Solid",
            stretch: true,
            sheerness: "Opaque",
            description: "Ribbed and wrinkeled texture. a nice drape and 25% weftwise stretch makes this heavyweight knit perfect for cozy cardigans, transition coats, and textured pullovers"
        },
        {
            fabricName: "Dusty Rose Pink Stretch Polyester 2x2 Rib Knit",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/4/3/438103.jpg',
            type: "Knit",
            colors: "Dusty Rose, Pink",
            quantityInYds: 5,
            print: "Solid",
            stretch: true,
            sheerness: "Slightly Translucent",
            description: "Moderate stretch through the weft, malleable drape, and a chunky 2x2 rib-knit construction",
        },
        {
            fabricName: "Swimwear Tricot with 4-Way Stretch",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/3/0/306790.jpg',
            type: "Knit",
            colors: "Peach, Pink",
            quantityInYds: 9,
            print: "Solid",
            stretch: true,
            sheerness: "Opaque",
            description: "4-way stretch nylon tricot. Run-resistant knit. Perfect for swimwear, underwear, sportswear and gloves."
        },
        {
            fabricName: "Mesh Lace with Pearl Beads",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/1/1/112682-c.jpg',
            type: "Mesh",
            colors: "Pink",
            quantityInYds: 14,
            print: "Solid",
            stretch: true,
            sheerness: "Sheer",
            description: "Pearled mesh fabric. Textural and provides a drape similar to that of a soft tulle. With a surprising amount of give in the weft, this couture material is easy to work with when trying to create fitted and tailored garments."
        },
        {
            fabricName: "Silk Duchesse Satin",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/P/V/PV9500-1.jpg',
            type: "Woven",
            colors: "White",
            quantityInYds: 12,
            print: "Solid",
            stretch: false,
            sheerness: "Opaque",
            description: "Understated sheen, medium weight and firm hand make for elegant special occasion wear."
        },
        {
            fabricName: "Organic Egyptian Cotton",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/3/3/330229.jpg',
            type: "Woven",
            colors: "Purple, Lavender",
            quantityInYds: 6,
            print: "Solid",
            stretch: false,
            sheerness: "Opaque",
            description: "Thin and lightweight, lavender Egyptian cotton that has a crisp, cool hand and a stiff but flexible drape. Perfect for shirting."
        },
        {
            fabricName: "Heathered Lightweight Denim",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/1/3/134062.jpg',
            type: "Woven",
            colors: "Blue",
            quantityInYds: 5,
            print: "Solid",
            stretch: true,
            sheerness: "Opaque",
            description: "100% hemp woven. Thin, lightweight 6oz. Perfect for comfortable shirts, tops, shirt dresses."
        },
        {
            fabricName: "Double Cotton Gauze",
            imageURL: 'https://www.moodfabrics.com/media/catalog/product/cache/94aa306f46bfa14a0eb90dabf19c296e/3/2/321808.jpg',
            type: "Woven",
            colors: "Orange, Brown",
            quantityInYds: 7,
            print: "Solid",
            stretch: false,
            sheerness: "Opaque",
            description: "100% cotton. Has a relaxed drape adds to its overall casual feel as it falls into soft silhouettes. The double layers adds to its thickness and durability."
        }          
    ]

    await Fabric.insertMany(fabrics)
    console.log('created fabrics')
}

const run = async () => {
    await main()
    db.close()
}

run()