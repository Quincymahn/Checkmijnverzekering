// pages/image-credits.js of app/image-credits/page.js (afhankelijk van je NextJS versie)

import Head from "next/head";
import Link from "next/link";

// Image credits data voor alle afbeeldingen op de website
const imageCredits = [
  {
    id: 1,
    filename: "woman-driving-camping.jpg",
    title: "Woman driving and searching for a camping place",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/woman-driving-searching-camping-place_10369143.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Homepage - Hero Section",
  },
  {
    id: 2,
    filename: "business-meeting.jpg",
    title: "Group of people working out business plan in office",
    author: "senivpetro",
    authorUrl: "https://www.freepik.com/author/senivpetro",
    imageUrl:
      "https://www.freepik.com/free-photo/group-people-working-out-business-plan-office_5495115.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "About Page - Team Section",
  },
  {
    id: 3,
    filename: "marketing-agency.jpg",
    title: "Authentic small youthful marketing agency",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/authentic-small-youthful-marketing-agency_94964071.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Services Page",
  },
  {
    id: 4,
    filename: "insurance-agent-senior.jpg",
    title: "Insurance agent communicating with senior clients",
    author: "Drazen Zigic",
    authorUrl: "https://www.freepik.com/author/drazenzigic",
    imageUrl:
      "https://www.freepik.com/free-photo/insurance-agent-communicating-with-senior-clients-while-showing-something-touchpad-meeting-office_25630108.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Insurance Services",
  },
  {
    id: 5,
    filename: "scooter-couple.jpg",
    title: "Young man on scooter with woman friend outdoors",
    author: "drobotdean",
    authorUrl: "https://www.freepik.com/author/drobotdean",
    imageUrl:
      "https://www.freepik.com/free-photo/young-man-scooter-with-womanfriend-outdoors_7286926.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Motor Insurance Page",
  },
  {
    id: 6,
    filename: "wheelchair-travel.jpg",
    title: "Disabled person travelling in city",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/disabled-person-travelling-city_29013643.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Accessibility Services",
  },
  {
    id: 7,
    filename: "couple-camping.jpg",
    title: "Happy couple in forest being together camping",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/happy-couple-forest-being-together-camping_11508280.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Travel Insurance",
  },
  {
    id: 8,
    filename: "nesebar-buildings.jpg",
    title: "Old buildings and gardens in Nesebar, Bulgaria",
    author: "ASphotofamily",
    authorUrl: "https://www.freepik.com/author/asphotofamily",
    imageUrl:
      "https://www.freepik.com/free-photo/old-buildings-gardens-nesebar-bulgaria_29453500.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Travel Destinations",
  },
  {
    id: 9,
    filename: "financial-meeting.jpg",
    title: "Happy man and his wife having meeting with financial advisor",
    author: "Drazen Zigic",
    authorUrl: "https://www.freepik.com/author/drazenzigic",
    imageUrl:
      "https://www.freepik.com/free-photo/happy-man-his-wife-having-meeting-with-financial-advisor-signing-agreement-office_26345136.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Financial Services",
  },
  {
    id: 10,
    filename: "advisor-phone.jpg",
    title: "Young handsome man working in office with mobile phone",
    author: "nensuria",
    authorUrl: "https://www.freepik.com/author/nensuria",
    imageUrl:
      "https://www.freepik.com/free-photo/young-handsome-man-working-his-office-with-mobile-phone_1232865.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Contact Page",
  },
  {
    id: 11,
    filename: "job-application.jpg",
    title: "Applying for vacancy",
    author: "pressfoto",
    authorUrl: "https://www.freepik.com/author/pressfoto",
    imageUrl: "https://www.freepik.com/free-photo/applying-vacancy_5399324.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Careers Page",
  },
  {
    id: 12,
    filename: "car-breakdown.jpg",
    title: "Woman checking engine, man changing tire",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/woman-checking-engine-man-swapping-tire_5385842.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Car Insurance - Breakdown",
  },
  {
    id: 13,
    filename: "family-couch.jpg",
    title: "Cute family spending time together",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/cute-family-spending-time-together_5180844.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Family Insurance",
  },
  {
    id: 14,
    filename: "family-activities.jpg",
    title:
      "Father teaching son to play guitar, daughter helping mother in kitchen",
    author: "yanalya",
    authorUrl: "https://www.freepik.com/author/yanalya",
    imageUrl:
      "https://www.freepik.com/free-photo/father-teaching-son-play-guitar-daughter-helping-mother-kitchen_3938157.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Family Life Insurance",
  },
  {
    id: 15,
    filename: "woman-arranging-art.jpg",
    title: "Woman arranging paintings at home",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/woman-arranging-paintings-home_5627265.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Home Insurance - Contents",
  },
  {
    id: 16,
    filename: "family-swing.jpg",
    title: "Family leisure - young adult man supporting child on swing",
    author: "zinkevych",
    authorUrl: "https://www.freepik.com/author/zinkevych",
    imageUrl:
      "https://www.freepik.com/free-photo/family-leisure-young-adult-smiling-man-supporting-child-swing-woman-crouching-with-outstretched-hand-spending-leisure-time-together-near-country-house-autumn-day_22426652.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Family Services",
  },
  {
    id: 17,
    filename: "insurance-accident-claim.jpg",
    title: "Insurance agent working at car accident claim site",
    author: "jcomp",
    authorUrl: "https://www.freepik.com/author/jcomp",
    imageUrl:
      "https://www.freepik.com/free-photo/insurance-agent-working-site-car-accident-claim-process-people-car-insurance-claim_5597948.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Car Insurance - Claims",
  },
  {
    id: 18,
    filename: "factory-worker.jpg",
    title: "Male worker in factory",
    author: "senivpetro",
    authorUrl: "https://www.freepik.com/author/senivpetro",
    imageUrl:
      "https://www.freepik.com/free-photo/male-worker-factory_4410596.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Business Insurance",
  },
  {
    id: 19,
    filename: "window-cleaner.jpg",
    title: "Man servant washing windows",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/man-servant-washing-windows_29663164.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Professional Services",
  },
  {
    id: 20,
    filename: "woman-checking-car.jpg",
    title: "Beautiful woman checking front of car",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/beautiful-woman-checking-front-car_5751414.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Car Maintenance Guide",
  },
  {
    id: 21,
    filename: "business-discussion.jpg",
    title: "Reading terms - business discussion",
    author: "pressfoto",
    authorUrl: "https://www.freepik.com/author/pressfoto",
    imageUrl: "https://www.freepik.com/free-photo/read-terms_5399326.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Terms & Conditions Page",
  },
  {
    id: 22,
    filename: "motorbike-rider.jpg",
    title: "Side view man riding motorbike",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/side-view-man-riding-motorbike_69339045.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Motorcycle Insurance",
  },
  {
    id: 23,
    filename: "couple-motorbike.jpg",
    title: "Full length image elegant couple rides modern motorbike",
    author: "drobotdean",
    authorUrl: "https://www.freepik.com/author/drobotdean",
    imageUrl:
      "https://www.freepik.com/free-photo/full-length-image-elegant-couple-rides-modern-motorbike_8080598.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Motorcycle Insurance - Couples",
  },
  {
    id: 24,
    filename: "bearded-scooter.jpg",
    title: "Serious young bearded man on scooter outdoors",
    author: "drobotdean",
    authorUrl: "https://www.freepik.com/author/drobotdean",
    imageUrl:
      "https://www.freepik.com/free-photo/serious-young-bearded-man-scooter-outdoors_7286880.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Scooter Insurance",
  },
  {
    id: 25,
    filename: "cartoon-motorbike.svg",
    title: "Cartoon happy man and woman riding motorbike in summer forest",
    author: "pch.vector",
    authorUrl: "https://www.freepik.com/author/pch-vector",
    imageUrl:
      "https://www.freepik.com/free-vector/cartoon-happy-man-woman-riding-motorbike-summer-forest-background-moped-vehicle-with-young-male-female-characters-road-flat-vector-illustration-romance-trip-holiday-concept_21683417.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Illustrations - Motor Section",
  },
  {
    id: 26,
    filename: "oldtimer-car.jpg",
    title: "Old car on cobblestone street",
    author: "mrsiraphol",
    authorUrl: "https://www.freepik.com/author/mrsiraphol",
    imageUrl:
      "https://www.freepik.com/free-photo/old-car-cobblestone-street_983528.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Classic Car Insurance",
  },
  {
    id: 27,
    filename: "senior-traveler.jpg",
    title: "Senior traveler wearing red sunglasses",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/senior-traveler-wearing-red-sunglasses_16188758.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Senior Travel Insurance",
  },
  {
    id: 28,
    filename: "man-loading-van.jpg",
    title: "Man loading packages",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/man-loading-packages_8973089.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Van Insurance",
  },
  {
    id: 29,
    filename: "moving-truck-illustration.svg",
    title: "Flat design house moving concept with truck",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-vector/flat-design-house-moving-concept-with-truck_10067101.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Moving Services",
  },
  {
    id: 30,
    filename: "job-interview.jpg",
    title: "HR team member talking with candidate during job interview",
    author: "Drazen Zigic",
    authorUrl: "https://www.freepik.com/author/drazenzigic",
    imageUrl:
      "https://www.freepik.com/free-photo/member-human-resource-team-talking-with-candidate-while-reviewing-his-resume-job-interview-office_26346619.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Careers - Interview Process",
  },
  {
    id: 31,
    filename: "business-partners.jpg",
    title: "Business partners working in office",
    author: "wayhomestudio",
    authorUrl: "https://www.freepik.com/author/wayhomestudio",
    imageUrl:
      "https://www.freepik.com/free-photo/business-partners-working-office_9722860.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Partnership Services",
  },
  {
    id: 32,
    filename: "parkinson-patient.jpg",
    title: "Old patient suffering from Parkinson",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/old-patient-suffering-from-parkinson_25177893.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Health Insurance - Elderly Care",
  },
  {
    id: 33,
    filename: "rehabilitation-center.jpg",
    title: "Man visiting rehabilitation center",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/man-visit-rehabilitation-center_41286514.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Health Services - Rehabilitation",
  },
  {
    id: 34,
    filename: "family-road-trip.jpg",
    title: "Elderly couple and niece loading baggage for holiday road trip",
    author: "DC Studio",
    authorUrl: "https://www.freepik.com/author/dcstudio",
    imageUrl:
      "https://www.freepik.com/free-photo/elderly-couple-niece-loading-baggage-trunk-automobile-leave-holiday-road-trip-grandparents-taking-small-child-seaside-destination-with-luggage-inflatable-summer_30704464.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Family Travel Insurance",
  },
  {
    id: 35,
    filename: "couple-backpacking-asia.jpg",
    title: "Traveler Asian couple spending holiday trip in Ayutthaya, Thailand",
    author: "tirachardz",
    authorUrl: "https://www.freepik.com/author/tirachardz",
    imageUrl:
      "https://www.freepik.com/free-photo/traveler-asian-couple-spending-holiday-trip-ayutthaya-thailand-backpacker-sweet-couple-enjoy-their-journey-amazing-landmark-traditional-city_4395069.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "International Travel Insurance",
  },
  {
    id: 36,
    filename: "friends-camping-van.jpg",
    title:
      "Group of friends enjoying time together in mountains with camper van",
    author: "DC Studio",
    authorUrl: "https://www.freepik.com/author/dcstudio",
    imageUrl:
      "https://www.freepik.com/free-photo/group-friends-enjoying-their-time-together-mountains-friends-camping-retro-camper-van-background_17328270.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Camper Van Insurance",
  },
  {
    id: 37,
    filename: "couple-caravan.jpg",
    title: "Medium shot smiley couple outdoors with caravan",
    author: "pikisuperstar",
    authorUrl: "https://www.freepik.com/author/pikisuperstar",
    imageUrl:
      "https://www.freepik.com/free-photo/medium-shot-smiley-couple-outdoors_29452058.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Caravan Insurance",
  },
  {
    id: 38,
    filename: "family-boat.jpg",
    title: "Rear view family on boat with wooden fences",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/rear-view-family-boat-wooden-fences_904851.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Boat Insurance",
  },
  {
    id: 39,
    filename: "sailor-yacht.jpg",
    title: "Sailor on yacht",
    author: "bublikhaus",
    authorUrl: "https://www.freepik.com/author/bublikhaus",
    imageUrl: "https://www.freepik.com/free-photo/sailor-yacht_11253645.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Yacht Insurance",
  },
  {
    id: 40,
    filename: "woman-cycling-city.jpg",
    title: "Young woman riding bike in city",
    author: "freepik",
    authorUrl: "https://www.freepik.com/author/freepik",
    imageUrl:
      "https://www.freepik.com/free-photo/young-woman-riding-bike-city_25272338.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Bicycle Insurance",
  },
  {
    id: 41,
    filename: "bicycle-mechanic.jpg",
    title:
      "Red hair bearded mechanic removing bicycle rear cassette in workshop",
    author: "fxquadro",
    authorUrl: "https://www.freepik.com/author/fxquadro",
    imageUrl:
      "https://www.freepik.com/free-photo/red-hair-bearded-mechanic-removing-bicycle-rear-cassette-workshop_26385594.htm",
    platform: "Freepik",
    license: "Free License (with attribution)",
    usedOn: "Bicycle Services - Repair",
  },
];

export default function ImageCredits() {
  return (
    <>
      <Head>
        <title>Image Credits - Attributions</title>
        <meta
          name="description"
          content="Image credits and attributions for all visual content used on this website"
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="pt-40 pb-10 mb-12 text-center bg-[#09182b]">
          <div>
            <h1 className="mb-4 text-3xl font-bold text-white">
              Image Credits & Attributions
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              We acknowledge and thank the talented creators whose work enhances
              our website. Below you will find proper attributions for all
              images and graphics used.
            </p>
          </div>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Credits Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {imageCredits.map((credit) => (
              <div
                key={credit.id}
                className="flex flex-col p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                {/* Main Info */}
                <div className="flex-1 mb-4">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 line-clamp-2">
                    {credit.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="block mb-1 font-medium text-gray-900">
                        Filename:
                      </span>
                      <code className="px-2 py-1 text-xs break-all bg-gray-100 rounded">
                        {credit.filename}
                      </code>
                    </div>

                    <div>
                      <span className="block mb-1 font-medium text-gray-900">
                        Used on:
                      </span>
                      <span>{credit.usedOn}</span>
                    </div>

                    <div>
                      <span className="block mb-1 font-medium text-gray-900">
                        License:
                      </span>
                      <span className="text-xs">{credit.license}</span>
                    </div>
                  </div>
                </div>

                {/* Attribution Links */}
                <div className="pt-3 space-y-3 border-t border-gray-100">
                  <div>
                    <p className="mb-1 text-xs text-gray-500">Author</p>
                    <Link
                      href={credit.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-blue-600 truncate transition-colors hover:text-blue-800"
                    >
                      {credit.author}
                    </Link>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">Platform</p>
                    <span className="text-sm font-medium text-gray-900">
                      {credit.platform}
                    </span>
                  </div>

                  <Link
                    href={credit.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    View Original
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="p-6 mt-12 rounded-lg bg-blue-50">
            <h3 className="mb-3 text-lg font-semibold text-blue-900">
              About These Attributions
            </h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                All images are used in accordance with their respective
                licenses. We respect the work of creators and provide proper
                attribution as required.
              </p>
              <p>
                Most images are sourced from Freepik under their Free License,
                which requires attribution. Some images may be used under
                Premium licenses where attribution is not required but provided
                voluntarily.
              </p>
              <p>
                If you are a content creator and have concerns about the use of
                your work, please contact us and we will address any issues
                promptly.
              </p>
            </div>
          </div>

          {/* Back to Site */}
          <div className="pb-8 mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Terug naar de website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
