"use strict";
!function(t,e,n,i){var s=function(e,n){t.SignRequest&&t.SignRequest.loaded||setTimeout(function(){t.SignRequest.init(e,n)},50)};t.SignRequest=t.SignRequest||{loaded:0,init:s};var o="https:"==e.location.protocol?"https://":"http://",u=e.createElement("script");u.async=!0;var c=e.scripts[0];u.src=o+"cdn.signrequest.com/signrequest-js/v1/signrequest-js.min.js",c.parentNode.insertBefore(u,c),t.SignRequest.init(n,i)}(window,document,{
// this initial configuration is optional, may also be undefined
subdomain: ''  // you could for example initialize the library to use a specific team subdomain here
}, function (SignRequest) {
// this callback is optional, may also be undefined
// SignRequest library is loaded and also passed as first argument
// execute your code...
var template_form = document.getElementById('template_form');
template_form.onsubmit = function (event) {
event.preventDefault();
var form_data = SignRequest.browser.serializeFormAsObject(event.target);
// the template id can be found in the link visible when editing a template and clicking the
// 'Show public signing link' button.
// this example template has a template tag with the external_id: 'city'.
var prefill_tags = [{external_id: ‘Date’, text: form_data.Date},{external_id: ‘First Name’, text: form_data.First Name},{external_id: ‘Last Name’, text: form_data.Last Name},{external_id: ’Street’, text: form_data.Street},{external_id: ‘Apt’, text: form_data.Apt},{external_id: ‘City’, text: form_data.City},{external_id: ‘State’, text: form_data.State},{external_id: ‘Zip’, text: form_data.Zip},{external_id: ‘Discipline’, text: form_data. Discipline},{external_id: ‘Business’, text: form_data. Business},{external_id: ‘DOB’, text: form_data. DOB},{external_id: ‘DLState’, text: form_data. DLState},{external_id: ‘DLNo’, text: form_data. DLNo}];
console.log('Using prefill_tags: ', prefill_tags);
var tab = SignRequest.browser.signTemplate('b1bfb53db891b41ba067b8933b52afab9af99d37975a55dad2f34fd5890e4eb2', {
	email: form_data.email,
	next: '/en/example-signed/',
	prefill_tags: prefill_tags
	});
	tab.onAny(function (event_type, payload, event) {
	console.log(event_type, payload, event);
});
return false;
};
});


