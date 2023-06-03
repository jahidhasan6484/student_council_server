# student_council_server

### Sample User Data:

{
"fullName": "Rajib Khan",
"email": "admin@studentcouncil.bd.edu",
"phoneNumber": "01718797522",
"userName": "admin",
"password": "Abc@123",
"role": "admin",
"status": "active"
}

### Blog And News:

{
"title": "Sample Title",
"description": "Sample Description",
"type": "Sample Type",
"date": "2023-05-24",
"month": "May",
"year": "2023",
"filename": "sample-file.txt",
"path": "/path/to/sample-file.txt"
}

### Contact:

{
"fullName": "Jahid Hasan",
"email": "jahidhasan6484@gmail.com",
"phoneNumber": "01774266484",
"passportStatus": "yes",
"aimingCountries": ["Country 1", "Country 2"],
"proficiency": "ielts",
"proficiencyScore": 6.0,
"interestedCourseLevel": "Master of Science",
"interestedCourseName": "Bachelor in Computer Science & Engineering",
"latestDegree": "Bachelor",
"latestInstitution": "df gdfg df g",
"subjectOrGroup": "Bachelor in Science",
"passingYear": "2099",
"message": "er fewr we awedadasdasd asd a",
"socialPlatform": "Others",
"date": 20,
"month": 5,
"year": 2023,
"reference": "expo"
}

### Service:

{
"title": "Jahid Hasan Recommendation",
"description": "Student Council has an exceptional working relationship with hundreds ...",
"path": "uploads/ebcfee206b5ce2640ed242a711b1d781"
}

### Country:

{
"countryName": "Singapore",
"subtitle": "Discover the beauty of Singapore",
"imageURL": "https://example.com/singapore-image.jpg",
"requirements": [
{
"question": "What is the minimum age requirement for studying in Singapore?",
"answer": "The minimum age requirement is 17 years old."
},
{
"question": "Do I need a visa to study in Singapore?",
"answer": "Yes, international students need a valid student visa."
}
],
"documents": [
{
"question": "What documents are required for the application process?",
"answer": "Documents such as academic transcripts, passport copy, and proof of English proficiency are usually required."
},
{
"question": "Are there any specific health-related documents needed?",
"answer": "A medical examination report may be required for some programs."
}
]
}

### University:

{
"countryName": "Singapore",
"universities": [
{
"name": "National University of Singapore",
"address": "21 Lower Kent Ridge Rd, Singapore",
"ranking": 1,
"officialWebsite": "https://www.nus.edu.sg/",
"imageURL": "https://example.com/nus-image.jpg"
}
]
}

### Testimonial:

{
"fullName": "John Doe",
"imageURL": "https://example.com/profile.jpg",
"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

### Multiple Image Upload Function:

const handleImageUpload = (event) => {
const formData = new FormData();
console.log(event.target.files);
console.log(event.target.files.length);

for (let i = 0; i < event.target.files.length; i++) {
formData.append("images", event.target.files[i]);
}

MultipleImageUpload(formData, setSelectedFiles);
};

### Why Us:

{
"title": "Example Titlsdssde Jahid hasan",
"details": "Example Details jj"
}

### Slider:

{
"title": "Example Title",
"subtitle": "Example Subtitle",
"imageURL": "https://example.com/image.jpg"
}

### ABout:

{
"title": "Example Title 999",
"description": "Example Description",
"imageURL": "https://example.com/image.jpg"
}

### Partner:

{
"title": "Example Title",
"imageURL": "https://example.com/image.jpg"
}

### Logo:

{
"headerLogoURL": "https://example.com/header-logo.png",
"footerLogoURL": "https://example.com/footer-logo.png"
}

### Privacy:

{
"privacyPolicy": "Hey, this is privacy policy"
}

### Footer:

{
"aboutCompany": "Example Company",
"address": "123 Example Street, City, Country",
"phone": "123-456-7890",
"email": "info@example.com",
"facebookGroupURL": "https://www.facebook.com/groups/example",
"facebookPageURL": "https://www.facebook.com/example",
"twitterURL": "https://www.twitter.com/example",
"instagramURL": "https://www.instagram.com/example",
"youtubeURL": "https://www.youtube.com/example",
"copyrightContent": "© 2023 Example Company"
}
