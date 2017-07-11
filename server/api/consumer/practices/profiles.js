import moment from "moment";
import { find } from 'lodash/fp';

const practices = [
  {
    Name: "Mike Tyson's ENT specialists",
    Address: "10 Marau Cres, Mission Bay, 1072, Auckland",
    Phone: "09 345 8798",
    Email: "mikesENT@gmail.com",
    Id: "1",
    PracticeId: "123",
    MaxDays: 20,
    AllowsBookingBy: 1,
    IsOnline: true,
    UrlName: "ima-eat-your-ear",
    OpeningHours: {
      1: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      2: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      3: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      5: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      4: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      7: { o: null, c: null },
      6: { o: moment().toString(), c: moment().add(9, "hours").toString() },
    },
    Description: "We are a Cornerstone accredited practice, the highest level of accreditation, signifying our commitment to continuous quality improvement and best possible care for patients by exceeding legal/safety standards and essential standards as set by a multidisciplinary development team.",
    Pictures: ["http://practicedemo.vensa.com/assets/images/bakerfield.jpg"],
    Language: ["English", "Mandarin", "Maori", "Spanish", "French", "Arabic", "German", "Samoan"],
    Specialties: ["Paediatrics", "Dermatology", "Gynecology", "Aged Care", "Lesions", "Urgent Care Medicine", "Women's Health", "Really long, really interesting something"],
    Doctors: [
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "1",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Steve Zissou",
        Picture: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=117936088",
        PmsUserId: "2",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Phil",
        Picture: "https://content.internetvideoarchive.com/content/photos/8713/831694_030.jpg",
        PmsUserId: "3",
        Type: "News Reporter",
      },
      {
        Name: "Dr. Punxsutawney Phil",
        Picture: "http://media2.s-nbcnews.com/j/MSNBC/Components/Photo/z_Projects_in_progress/_TODAY/superstitions-brill/TODAY-app-superstitions-groundhog.grid-4x2.jpg",
        PmsUserId: "4",
        Type: "Ground Hog Weather Predictor",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "5",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "6",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Drake Ramoray",
        Picture: "http://cdn.playbuzz.com/cdn/0c1011c9-2dc1-4b15-8ba9-a288535ad301/de2278e7-e712-4233-a8a9-505ee1aa4482.jpg",
        PmsUserId: "7",
        Type: "General Practitioner",
      },
    ],
  },
  {
    Name: "Knick's Knee Club",
    Address: "58a Akoranga Dr, Northcote, Auckland, Auckland, 2345",
    Phone: "09 345 8798",
    Email: "knicksknees@gmail.com",
    Id: "2",
    PracticeId: "231",
    MaxDays: 20,
    AllowsBookingBy: 2,
    IsOnline: false,
    UrlName: "knicksknees",
    OpeningHours: {
      1: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      2: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      3: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      5: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      4: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      7: { o: null, c: null },
      6: { o: null, c: null },
    },
    Description: "We are a Cornerstone accredited practice, the highest level of accreditation, signifying our commitment to continuous quality improvement and best possible care for patients by exceeding legal/safety standards and essential standards as set by a multidisciplinary development team.",
    Pictures: ["http://practicedemo.vensa.com/assets/images/bakerfield.jpg"],
    Language: ["Maori", "Swahili", "Wingdings", "NZ Sign"],
    Specialties: ["Geology", "Scientology", "Gynecology", "Medicine", "Lesions", "Urgent Care Medicine", "Women's Health", "Really long, really interesting something"],
    Doctors: [
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "1",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Steve Zissou",
        Picture: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=117936088",
        PmsUserId: "2",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Phil",
        Picture: "https://content.internetvideoarchive.com/content/photos/8713/831694_030.jpg",
        PmsUserId: "3",
        Type: "News Reporter",
      },
      {
        Name: "Dr. Punxsutawney Phil",
        Picture: "http://media2.s-nbcnews.com/j/MSNBC/Components/Photo/z_Projects_in_progress/_TODAY/superstitions-brill/TODAY-app-superstitions-groundhog.grid-4x2.jpg",
        PmsUserId: "4",
        Type: "Ground Hog Weather Predictor",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "5",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "6",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Drake Ramoray",
        Picture: "http://cdn.playbuzz.com/cdn/0c1011c9-2dc1-4b15-8ba9-a288535ad301/de2278e7-e712-4233-a8a9-505ee1aa4482.jpg",
        PmsUserId: "7",
        Type: "General Practitioner",
      },
    ],
  },
  {
    Name: "Vensa Health Clinic",
    Address: "459 Great South Rd, Penrose, Auckland, Auckland",
    Phone: "09 345 8798",
    Email: "vensahealth@gmail.com",
    Id: "3",
    PracticeId: "321",
    MaxDays: 20,
    AllowsBookingBy: 4,
    IsOnline: true,
    UrlName: "vensahealth",
    OpeningHours: {
      1: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      2: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      3: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      5: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      4: { o: moment().toString(), c: moment().add(9, "hours").toString() },
      7: { o: null, c: null },
      6: { o: null, c: null },
    },
    HourNote: "This is the note about hours. Information about hours is found in this note.",
    Description: "We are a Cornerstone accredited practice, the highest level of accreditation, signifying our commitment to continuous quality improvement and best possible care for patients by exceeding legal/safety standards and essential standards as set by a multidisciplinary development team.",
    Pictures: ["http://casemed.case.edu/gradprog/img/gradbanner.jpg"],
    Language: [],
    Specialties: [],
    Doctors: [
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "1",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Steve Zissou",
        Picture: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=117936088",
        PmsUserId: "2",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Phil",
        Picture: "https://content.internetvideoarchive.com/content/photos/8713/831694_030.jpg",
        PmsUserId: "3",
        Type: "News Reporter",
      },
      {
        Name: "Dr. Punxsutawney Phil",
        Picture: "http://media2.s-nbcnews.com/j/MSNBC/Components/Photo/z_Projects_in_progress/_TODAY/superstitions-brill/TODAY-app-superstitions-groundhog.grid-4x2.jpg",
        PmsUserId: "4",
        Type: "Ground Hog Weather Predictor",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "5",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Peter Venkman",
        Picture: "http://www.multiversedb.com/static/processed_images/peter-venkman-photo.ahrcuqshgjl86p0ipqyq.f.jpg",
        PmsUserId: "6",
        Type: "General Practitioner",
      },
      {
        Name: "Dr. Drake Ramoray",
        Picture: "http://cdn.playbuzz.com/cdn/0c1011c9-2dc1-4b15-8ba9-a288535ad301/de2278e7-e712-4233-a8a9-505ee1aa4482.jpg",
        PmsUserId: "7",
        Type: "General Practitioner",
      },
    ],
  },
];
const getPractice = (id) => find(({ UrlName }) => UrlName === id, practices);

export default getPractice;
