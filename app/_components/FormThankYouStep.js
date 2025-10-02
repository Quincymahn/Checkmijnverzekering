import { ClockFading, MailSearch, PhoneOutgoing } from "lucide-react";

function FormThankYouStep({ onReset, submissionTime }) {
  return (
    <div className="h-full p-4 bg-white sm:p-6 lg:p-8 shadow-md-custom rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
      <div className="max-w-2xl text-center">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full sm:w-20 sm:h-20">
          <svg
            className="w-8 h-8 text-green-600 sm:w-10 sm:h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h3 className="mb-3 text-xl font-semibold sm:text-2xl text-slate-800">
          Bedankt voor uw aanvraag!
        </h3>
        <p className="mb-6 text-sm sm:text-base text-slate-600">
          Uw formulier is succesvol verzonden. We nemen zo spoedig mogelijk
          contact met u op om uw verzekering te bespreken.
        </p>

        <div className="grid w-full grid-cols-2 gap-3">
          <div className="w-full gap-2 p-4 border border-gray-200 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-2 text-lg">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-600 border border-white rounded-full">
                <ClockFading className="w-4 h-4 text-white" />
              </div>
              <p className="text-[#00af76] font-medium">Tijdlijn</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="bg-[#00af76] w-6 h-6 rounded-full"></div>
              <div>
                <p className="">Aanvraag ontvangen</p>
                <p className="-mt-1 text-sm text-left text-gray-500">
                  Vandaag, {submissionTime}
                </p>
              </div>
            </div>
            <div className="w-full my-2 border-b border-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-gray-500 rounded-full bg-inherit"></div>
              <div>
                <p className="">Eerste contact</p>
                <p className="-mt-1 text-sm text-left text-gray-500">
                  Binnen 24 uur
                </p>
              </div>
            </div>
            <div className="w-full my-2 border-b border-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-gray-500 rounded-full bg-inherit"></div>
              <div>
                <p className="">Advies gesprek</p>
                <p className="-mt-1 text-sm text-left text-gray-500">
                  Binnen 3 dagen
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-full p-4 border border-gray-200 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-600 border border-white rounded-full">
                <ClockFading className="w-4 h-4 text-white" />
              </div>
              <p className="text-[#00af76] font-medium">Wat wij bieden</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-gray-500">Aantal verzekaraars</p>
              <p className="font-medium">20+ keuzes</p>
            </div>
            <div className="w-full my-2 border-b border-gray-200"></div>
            <div className="flex justify-between">
              <p className="text-gray-500">Kosteloos</p>
              <p className="font-medium">Vrijblijvend advies</p>
            </div>
            <div className="w-full my-2 border-b border-gray-200"></div>
            <div className="flex justify-between">
              <p className="text-gray-500">Advies gesprek</p>
              <p className="font-medium">Geheel online</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <div className="mt-10">
            <p className="text-xl font-medium">Heb je direct een vraag?</p>
            <p className="text-gray-500">
              We staan altijd voor je klaar. Neem gerust contact op!
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <a
                href="tel:08554015280"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition duration-300 bg-[#00af76] rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-md"
              >
                <PhoneOutgoing fill="white" className="w-4 h-4" />
                <span>Bel direct: 08554015280</span>
              </a>
              <a
                href="tel:08554015280"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium text-[#00af76] transition duration-300 rounded-full cursor-pointer bg-inherit hover:-translate-y-1 hover:shadow-gray-400 hover:shadow-md border border-[#00af76]"
              >
                <MailSearch outline="#00af76" className="w-4 h-4" />
                <span>info@checkmijnverzekering.nl</span>
              </a>
            </div>

            <p className="mt-5 text-center text-gray-500">
              <span className="font-medium text-black">
                Geen verplichting:{" "}
              </span>
              Ons eerste gesprek is altijd vrijblijvend. We adviseren pas verder
              nadat je expliciet akkoord bent gegaan.
            </p>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 mt-5 text-sm text-[#1b7ced] hover:text-[#1565d8] font-medium transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Nog een aanvraag indienen
        </button>
      </div>
    </div>
  );
}

export default FormThankYouStep;
