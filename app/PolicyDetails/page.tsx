"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FileText } from "lucide-react";
// import { PDFDownloadLink } from "@react-pdf/renderer"
const MotorInsuranceCertificate = React.lazy(
  () => import("@/components/Documents/motor-insurance-certificate")
);
const InsuranceDocument = React.lazy(
  () => import("@/components/Documents/InsuranceDocument")
);
const StatementFactAgeas = React.lazy(
  () => import("@/components/Documents/StatementFactAgeas")
);
const ClientPDFDownloadLink = dynamic(
  () => import("@/components/ClientPDFDownloadLink"),
  {
    ssr: false,
  }
);

export default function PolicyDetail() {
  const documents = [
    {
      name: "Certificate of Motor Insurance",
      fileName: "MotorInsuranceCertificate",
      type: "component",
      component: <MotorInsuranceCertificate />,
    },
    {
      name: "New Policy Schedule",
      fileName: "NewPolicySchedule",
      type: "component",
      component: <InsuranceDocument />,
    },
    {
      name: "Policy Wording",
      fileName: "PolicyWording",
      type: "file",
      url: "/pdf/DocumentationViewPolicy.pdf",
    },
    {
      name: "Tempcover Contract",
      fileName: "TempcoverContract",
      type: "file",
      url: "/pdf/TempcoverContract.pdf",
    },
    {
      name: "Statement of Fact",
      fileName: "StatementofFact",
      type: "component",
      component: <StatementFactAgeas />,
    },
    {
      name: "Policy Endorsement",
      fileName: "PolicyEndorsement",
      type: "file",
      url: "/pdf/PolicyEndorsement.pdf",
    },
    {
      name: "Insurance Product Information",
      fileName: "InsuranceProductInformation",
      type: "file",
      url: "/pdf/InsuranceProductInformation.pdf",
    },
  ];
  return (
    <div className="min-h-screen lg:px-0 md:px-0 px-4 pl-[15px] sm:px-0">
      {/* Header */}

      <header>
        <div className="w-full lg:block md:block hidden bg-[#F2F2F2] topbar-box  pb-[2px]">
          <div className="max-w-4xl  mx-auto ">
            <div className="pt-[1px]  flex  justify-end mr-[16.5px] items-center  text-sm">
              <div className="flex items-center space-x-4 ">
                <div className="my-links-work flex items-center space-x-4 mr-[15px] mt-[-2px]">
                  <Link
                    href="#"
                    className="text-[#234397] text-[12px] font-normal hover:underline mr-[15px]"
                  >
                    Who we cover - eligibility
                  </Link>
                  <span className="text-[#19a4e0]">|</span>
                  <Link
                    href="#"
                    className="text-[#234397] text-[12px] hover:underline mr-[0px]"
                  >
                    Why choose Tempcover?
                  </Link>
                  <span className="text-[#19a4e0]">|</span>
                  <Link
                    href="#"
                    className="text-[#234397] text-[12px] hover:underline"
                  >
                    FAQ's
                  </Link>
                </div>
                <nav
                  id="social-navigation"
                  className="social-navigation -ml-1  hidden-sm"
                >
                  <a
                    href="https://twitter.com/tempcover"
                    className="twitter"
                    title="Visit tempcover's Twitter feed"
                    target="_blank"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.facebook.com/tempcover"
                    className="facebook"
                    title="Visit tempcover's Facebook page"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/user/tempcover"
                    className="youtube"
                    title="Visit tempcover's YouTube channel"
                    target="_blank"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.linkedin.com/company/temporary-cover-ltd?trk=tyah"
                    className="linkedin"
                    title="Visit tempcover's LinkedIn feed"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://plus.google.com/+tempcover/posts"
                    className="google"
                    title="Visit tempcover's Google + page"
                    target="_blank"
                  >
                    Google +
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-4xl lg:px-0 md:px-0 px-4 mx-auto sm:px-0">
            <div className="flex  md:gap-2 gap-3 justify-between flex-col lg:flex-row md:flex-row logo-head md:py-5 py-4 ">
              <div className="brand-logo"></div>
              <div className="flex  flex-col lg:mt-[2px]  text-left lg:text-center md:text-right">
                <div>
                  <h1 className="md:text-2xl text-2xl  font-bold text-[#234397] lg:mb-0 md:mb-0 mb-3 main-heading">
                    SHORT TERM INSURANCE
                  </h1>
                </div>
                <div className="-ml-2">
                  <p className=" text-[#234397] -mt-[2px] text-[14px] main-page-para">
                    We are the UK's largest temporary and short term insurance
                    provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main content */}
      <div className="max-w-4xl mx-auto policy-detail-page">
        <div>
          <h1 className="text-4xl font-bold text-[#000] mb-5">
            POLICY DETAILS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="lg:order-1 md:order-1 order-2 mt-[3px] ml-[2px]">
            <div className="bg-[#19a4e0] text-white py-[10px] px-[16px] ">
              <h4 className="text-[18px] leading-[21px]">
                Documents you need now
              </h4>
            </div>

            <div className="bg-white border border-[#19a4e0] border-t-0 pt-[15px] pb-[30px] px-[15px] ">
              <p className="text-[#555555] mb-2 policy-para">
                Policy documents will be sent to the email address provided. If
                you need your documents posting to you, please let us know by
                emailing <a className="no-underline">contactus@tempcover.com</a>
                .
              </p>

              <div>
                <ul className="policy-items">
                  {documents.map((document, index) => (
                    <li
                      key={index}
                      className="flex gap-6 pt-[4px] items-start "
                    >
                      <div className="w-4 h-6 flex-shrink-0">
                        <Image
                          src="/pdf.png"
                          width={10}
                          height={10}
                          className="w-4 h-6"
                          alt=""
                        />
                      </div>

                      {document.type === "component" ? (
                        <ClientPDFDownloadLink
                          document={document.component}
                          fileName={`${document.fileName}.pdf`}
                          label={document.name}
                        />
                      ) : (
                        <a
                          href={document.url}
                          download={document.fileName}
                          className="text-[#19a4e0] hover:underline"
                        >
                          {document.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="lg:block md:block hidden text-[#333] mt-7 text-[16px] unable-text">
              Unable to view your documentation? Download Adobe reader for free{" "}
              <a href="#" className="text-[#19a4e0] hover:underline">
                here
              </a>
              .
            </p>
            <div className="mt-8">
              <button className="btn btn-secondary px-3 py-1 home-button">
                HOME
              </button>
            </div>
          </div>

          <div className="lg:px-6 lg:order-2 md:order-2 order-1 detail-box">
            <div className="border bg-[#F2F2F2] flex text-[16px] flex-col  border-[#333] py-2 px-4">
              <div className=" text-[#333] detail-box-first">
                <strong className="font-bold">FROM</strong> Monday, 9th June
                2025 at 3:35 PM
              </div>
              <div className=" text-[#333] ">
                <strong className="font-bold">TO</strong> Monday, 9th June 2025
                at 4:35 PM
              </div>
            </div>
            <div className="border bg-[#F2F2F2] flex gap-2 border-[#333] py-2 px-4">
              <div className=" text-[#333]">
                Your reference:
                <strong className="font-bold"> TCV-MOT-44072540</strong>
              </div>
            </div>
            <div className="border bg-[#F2F2F2] flex gap-2 border-[#333] py-2 px-4">
              <div className=" text-[#333]  font-bold">Policy:</div>
              <div className="font-bold text-[#333]">
                Fully comprehensive cover
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
