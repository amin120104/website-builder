const express = require('express')
var path = require('path')
const jsonData = require("./public/resources/getsbo.json")

var bodyData = [
	{
		page_name: "home",
		path: "/",
		body: [
			{
				template: "slider",
				items: [
					{
						title: "Slider 1",
						desc: "this is description text.",
						button_name: "SBO Details",
						button_url: "https://www.getsbo.com/",
						image: "https://www.synopi.com/wp-content/themes/website-synopi/img/natiply-iso-product.png"
					},
					{
						title: "Slider 2",
						desc: "this is description text.",
						button_name: "SBO Details",
						button_url: "https://www.getsbo.com/",
						image: "https://www.synopi.com/wp-content/themes/website-synopi/img/natiply-iso-product.png"
					},
				]
			},
			{
				template: "countTemplate",
				numbers: [
					2000,
					15,
					150,
					10000
				],
				text: [
					"Service Providers",
					"Years Experience",
					"Countries",
					"Millions End Uers"
				]
			}
		]
	},
	{
		page_name: "products",
		path: "products",
		body: [
			{
				template: "countTemplate",
				numbers: [
					2000,
					15,
					150,
					10000
				],
				text: [
					"Service Providers",
					"Years Experience",
					"Countries",
					"Millions End Uers"
				]
			},
			{
				template: "home_template_1",
				title: "SBO Product",
				button: { button_name: "SBO Details", button_url: "https://www.getsbo.com/" }
			},
			{
				template: "products",
			}
		]
	}
];

const app = express()
app.set('view engine', 'pug')
app.use('/public', express.static(path.join(__dirname, './public')))


// all link
const allLink = () => {
	for (let i = 0; i < bodyData.length; i++) {
		let cd = bodyData[i];
		app.get(`/${cd.path}`, (req, res) => {
			res.render('main', { layoutData: jsonData.layouts, bodyData: cd.body });
		})

	}
}

allLink();


const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})