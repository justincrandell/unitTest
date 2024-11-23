const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();
const app = 'https://us-central1-krpt-dev.cloudfunctions.net/api/v1/';

var getAllLists = require('../testdata/checklist/get_all').list;
var getByIDLists = require('../testdata/checklist/get_by_id').list;
var postLists = require('../testdata/checklist/post').list;
var delByIDLists = require('../testdata/checklist/delete_by_id').list;
var patchByIDLists = require('../testdata/checklist/patch_by_id').list;

var lists = {
	'GET-All Method' : getAllLists,
	'GET-By-ID Method' : getAllLists,
	'POST Method' : getAllLists,
	'DEL-By-ID Method' : getAllLists,
	'PATCH-By-ID Method' : getAllLists,
};

let ids = require('../testdata/ids').ids;
let test_id = 'admin-test-123456';
let posts = require('../testdata/posts').posts;
let token = 'ZjkxZjkzZWEtNzgzYi0xMWViLWI3OTUtMDZmNWJmMzAzYjU0';	

for (const [key, value] of Object.entries(lists)) {
	describe(key, function() {
		switch(key) {
			case 'GET-All Method':
				value.forEach(element => {
					it(element, function(done) {
						chai.request(app)
					    .get(element)
					    .set({ "Authorization": `${token}` })
					    .end(function(err, res) {
							res.should.have.status(200);
							done();
						});
					});
				});
				break;
			case 'GET-By-ID Method':
				value.forEach(element => {
					it(element, function(done) {
						chai.request(app)
					    .get(element)
					    .set({ "Authorization": `${token}` })
					    .query({id : ids[element]})
					    .end(function(err, res) {
							res.should.have.status(200);
							done();
						});
					});
				});
				break;
			case 'POST Method':
				value.forEach(element => {
					it(element, function(done) {
						chai.request(app)
					    .post(element)
					    .set({ "Authorization": `${token}` })
					    .send(posts[element])
					    .end(function(err, res) {
							res.should.have.status(201);
							done();
						});
					});
				});
				break;
			case 'DEL-By-ID Method':
				value.forEach(element => {
					it(element, function(done) {
						chai.request(app)
					    .delete(element)
					    .set({ "Authorization": `${token}` })
					    .query({id: ids[element]})
					    .end(function(err, res) {
							res.should.have.status(204);
							done();
						});
					});
				});
				break;
			case 'PATCH-By-ID Method':
				value.forEach(element => {
					it(element, function(done) {
						chai.request(app)
					    .patch(element)
					    .set({ "Authorization": `${token}` })
					    .query({id: ids[element]})
					    .send(posts[element])
					    .end(function(err, res) {
							res.should.have.status(200);
							done();
						});
					});
				});
				break;
			default:
				break;
		}
	});
}

