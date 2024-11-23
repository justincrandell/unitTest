module.exports.posts = {
	accountdeletionrequest : {
		id:"91172b3a-a117-11eb-9c4f-06f5bf303b54",
		fk_client:"a165ac87-783b-11eb-b795-06f5bf303b54",
		createddatetime:"2021-04-19T14:00:15.000Z",
		reason:"saddsad",
		tk_typeaccountdeletionrequeststatus:"e6eb3ac3-7684-11eb-b795-06f5bf303b54"
	},
	address : {
		id:"4dbb7917-05c7-4398-bf4b-ba105a8303c7",
		fk_client:"17bc23d1-a1db-11eb-9c4f-06f5bf303b54",
		addressline1:"121221211221",
		addressline2:"21121221",
		city:"2121",
		postalcode:"2112",
		province:"12222222222",
		tk_country:"d3e71f41-768d-11eb-b795-06f5bf303b54",
		tk_typeaddress:"1c17f99d-7685-11eb-b795-06f5bf303b54"
	},
	admin : {
		id:"dc902360-7b64-11eb-b795-06f5bf303b54",
		email:"test@gmail.com",
		fk_authentication:"aac9e14f-7b64-11eb-b795-06f5bf303b54"
	},
	authentication : {
		id:"1238329a-a269-11eb-9c4f-06f5bf303b54",
		secret:"ZGRzZHNkc2Rz",
		islocked:0,
		creationdatetime:"2021-04-21T06:16:12.000Z",
		lastlogindatetime:null
	},
	bankaccount : {
		id:"1d19bf4f-f021-47bc-b7e0-7c172045bbb6",
		alternatelastname:"",
		accountnumber:"567567657657",
		branchcode:"250420",
		fk_client:"9ec9561e-a267-11eb-9c4f-06f5bf303b54",
		tk_typebank:"a0831be9-7685-11eb-b795-06f5bf303b54",
		tk_typebankaccount:"e5aef8be-7685-11eb-b795-06f5bf303b54",
		tk_typebankaccountdesignation:"182d1082-7686-11eb-b795-06f5bf303b54",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54"
	},
	client : {
		id:"17bc23d1-a1db-11eb-9c4f-06f5bf303b54",
		code:"sfsxv",
		firstname:"derick",
		lastname:"watts",
		mobile:"2322212232",
		email:"derick@gmail.com",
		isemailverified:0,
		isverified:0,
		placeofbirth:"sdsddsds",
		tk_gender:"5437ec31-7686-11eb-b795-06f5bf303b54",
		fk_authentication:"174f5f0e-a1db-11eb-9c4f-06f5bf303b54",
		tk_nationality:"d3e71f41-768d-11eb-b795-06f5bf303b54",
		issubmitted:1
	},
	financialinformation : {
		id:"056f8e9f-9c98-4f86-8bbb-859f88c2c6a0",
		fk_client:"9ec9561e-a267-11eb-9c4f-06f5bf303b54",
		occupation:"Manager",
		designation:"CEO",
		isusperson:0,
		tk_typenatureofbusiness:"1a3f7683-7687-11eb-b795-06f5bf303b54",
		tk_typeaverageincome:"5fefa686-7685-11eb-b795-06f5bf303b54",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54"
	},
	identificationdocument : {
		id:"021a8d37-a26a-11eb-9c4f-06f5bf303b54",
		name:"book",
		createddatetime:"2021-04-21T06:22:55.000Z",
		fk_client:"9ec9561e-a267-11eb-9c4f-06f5bf303b54",
		tk_typeidentificationdocument:"762fd137-7686-11eb-b795-06f5bf303b54",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54",
		url:"https://firebasestorage.googleapis.com/v0/b/handyman-1550659813153.appspot.com/o/yw22569426?alt=media&token=912a9c81-df97-4b34-ab0f-9c96554a254a"
	},
	kyc : {
		id:"045cfa44-87af-4b25-a3bb-a8e67e4bade0",
		fk_client:"6851494b-a287-11eb-9c4f-06f5bf303b54",
		idnumber:"1111111111111",
		passportnumber:"",
		fk_address:"6a5a427e-1260-4098-84fc-88f467f67ce2",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54"
	},
	proofofaddressdocument : {
		id:"01f9cc8d-a26a-11eb-9c4f-06f5bf303b54",
		name:"residence",
		createddatetime:"2021-04-21T06:22:54.000Z",
		fk_client:"9ec9561e-a267-11eb-9c4f-06f5bf303b54",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54",
		tk_typeproofofaddressdocument:"72f488a0-7687-11eb-b795-06f5bf303b54",
		url:"https://firebasestorage.googleapis.com/v0/b/handyman-1550659813153.appspot.com/o/33troz2l53h?alt=media&token=50bd040c-4990-46c7-a208-c57a0862cedd"
	},
	referral : {
		id:"4885d81b-7b54-11eb-b795-06f5bf303b54",
		fk_referee:"f91f93ea-783b-11eb-b795-06f5bf303b54",
		isapproved:0,
		fk_referralcode:"35cae0c3-7b52-11eb-b795-06f5bf303b54"
	},
	referralcode : {
		id:"35cae0c3-7b52-11eb-b795-06f5bf303b54",
		code:"55555",
		fk_client:"f91f93ea-783b-11eb-b795-06f5bf303b54"
	},
	sourceoffundsdocument : {
		id:"07e3d6cb-b01f-42fa-8c5f-d4a32f891d38",
		name:"a165ac87-783b-11eb-b795-06f5bf303b54document",
		createddatetime:"2021-04-22 12:12:36",
		fk_client:"a165ac87-783b-11eb-b795-06f5bf303b54",
		tk_typesourceoffundsdocument:"f0bfdd85-7687-11eb-b795-06f5bf303b54",
		tk_typeverificationstatus:"774ad4de-7684-11eb-b795-06f5bf303b54",
		url:"https://firebasestorage.googleapis.com/v0/b/handyman-1550659813153.appspot.com/o/7wmfx09fysh?alt=media&token=0c8e5724-352c-4adb-9a3a-278841117d08"
	},
	taxidentificationnumber :{

	},
	trade : {
		id:"0d3bfbe5-7b5b-11eb-b795-06f5bf303b54",
		fk_client:"a165ac87-783b-11eb-b795-06f5bf303b54",
		initiationdatetime:"2021-03-02T12:45:45.000Z",
		tk_typestradestatus:"67755710-7688-11eb-b795-06f5bf303b54",
		startingcapital:500,
		clientpnl:100
	},
	typeaccountdeletionrequeststatus : {
		id:"e6eb3ac3-7684-11eb-b795-06f5bf303b54",
		name:"REQUESTED",
		description:"Requested"
	},
	typeaverageincome : {
		id:"4301aad5-7685-11eb-b795-06f5bf303b54",
		name:"LESS_THAN_10K_ZAR",
		description:"R100k"
	},
	typebank : {
		id:"868b01c5-7685-11eb-b795-06f5bf303b54",
		name:"ABSA_BANK",
		description:"ABSA Bank"
	},
	typebankaccount : {
		id:"e5aef8be-7685-11eb-b795-06f5bf303b54",
		name:"CURRENT_ACCOUNT",
		description:"Current Account"
	},
	typebankaccountdesignation : {
		id:"182d1082-7686-11eb-b795-06f5bf303b54",
		name:"PERSONAL_ACCOUNT",
		description:"Personal Account"
	},
	typecountry : {
		id:"d3e71f41-768d-11eb-b795-06f5bf303b54",
		countrycode:"AS",
		name:"American Samoa",
		flag:"https://cdn.staticaly.com/gh/hampusborgos/country-flags/master/svg/as.svg"
	},
	typeidentificationdocument : {
		id:"762fd137-7686-11eb-b795-06f5bf303b54",
		name:"RSA_ID_BOOK",
		description:"South African Identity Book"
	},
	typenatureofbusiness : {
		id:"01e5c24c-7687-11eb-b795-06f5bf303b54",
		name:"TOURISM",
		description:"Hospitality and Tourism"
	},
	typeproofofaddressdocument : {
		id:"72f488a0-7687-11eb-b795-06f5bf303b54",
		name:"UTILITY_BILL",
		description:"Utility Bill"
	},
	typesourceoffundsdocument : {
		id:"020c8414-7688-11eb-b795-06f5bf303b54",
		name:"SALE_OF_PROPERTY",
		description:"Sale of property"
	},
	typesourceoffundsdocumentexample : {
		id:"0774b993-8bac-11eb-9c4f-06f5bf303b54",
		tk_typesourceoffundsdocument:"0ebba272-7688-11eb-b795-06f5bf303b54",
		description:"Copy of the contract of sale"
	},
	typetradestatus : {
		id:"5e4687c1-7688-11eb-b795-06f5bf303b54",
		name:"NOT_STARTED",
		description:"Not Started"
	},
	typeverificationstatu :{

	}
 };
