"use client";
import React, { useEffect, useState } from "react";
import { Header } from "../Navbar/Header";
import CaseStudyList from "./List";
import Image from "next/image";
import Footer from "../Footer/Footer";

function CaseStudy() {
  const [data_id, setdata_id] = useState(1);

  useEffect(() => {
    console.log(data[data_id - 1].benefits);
  }, [data_id]);

  const data = [
    {
      id: 1,
      title: "PCN-EOL management",
      challenge:
        "The Primary challenge of PCN Management is frequent Line Stops due to several reasons & having High Operational Costs. Challenge in tracking the PCN notification from supplier, and to make an Action plan when PCN/PDN notification is received from the supplier. Lagging of supplier support on issuing PCN/PDN notification. Challenge on managing PCN/PDN history insufficient data from the supplier on changes. Engineering team to spend more time on PDM activity and qualification plans. ",
      proposal:
        "InESS has proposed and deployed a PCN automation tool with a lot of features to manage all the PCN and EOL’s in a single platform having access to various stakeholders. InESS analyzed the affected parts and impact of changes concerning products and recommended the action plan. Like qual reports from supplier, alternate solution, qual plan, COO, forecast analysis, set-up priority for EOL’d parts and based on EOA of the products, coordinated with the Inventory management team and provided LTB-LTS solution. We follow J- STD-048 & JESD46D for PCN/PDN tracking. ",
      benefits:
        "A one-stop solution with tool automation, customers will get real-time data, which team needs action, and what needs to be prioritized. Traceability of action plans and recommendations concerning the type of change, Inventory forecast reports, qualification reports from suppliers. Reduced cycle time and operational cost. Customers can access the various trends like the number of in-flow, various status tracking, LTB alerts, and automated email acknowledgment for suppliers. ",
    },
    {
      id: 2,
      title: "BOM Risk Management",
      challenge:
        "The foremost challenge of BOM Management is when the supplier makes the part’s EOL which are highly reliable on the Market which causes the discontinuation of products. Not having the complete orderable supplier part numbers, incorrect supplier name due to supplier acquisition, non-active parts, single-sourced parts, and old tech parts leads to potential risk in BOM. ",
      proposal:
        "InESS has proposed and deployed a tool to manage the current life cycle of the parts used in the BOMs such as Preliminary, Active, NRND, EOL, and Obsolete. We provide data on the supplier production launch period and how long supplier parts will be available on market in mass production. InESS also provides a risk mitigation plan, alternate suggestions where the part source is a single/sole source, qualification analysis on the tech change, and keeping the BOM with the latest technology and LTB-LTs support for EOL’s parts. ",
      benefits:
        "A one-stop solution with tool automation keeps track of all the parts used in BOM, eliminating duplication of suppliers/parts, customers will get real-time lifecycle data for the parts, BOM wise data, complete orderable part numbers, and standardized supplier name. Additional Forecast data and parts support the life cycle period. Customers will also get a backup source for single/sole source components. Visibility of risk parts and the mitigation plan concerning products and alerting customers when the potential risk part is nearing EOL. ",
    },
    {
      id: 3,
      title: "Commodity Management Tool",
      challenge:
        "Commodity Management is predominantly quoting process, business share to suppliers, BOM cost analysis, and reports were manually done through Excel and not through any legacy tools which consumed more manual effort and time due to which chances of manual error were high. Some customers also maintain an improper supplier contact database which results in more cost holes. ",
      proposal:
        "InESS has proposed and deployed a Commodity Management Tool to manage the EMS-controlled parts, customer-controlled parts, and their business process. Automation includes automated Quoting processes with automated email alerts which are sent to suppliers/distributors and contract manufacturers. Tool access is enabled for all the suppliers, distributors, contract manufacturers, commodity managers & top management. The tool can suggest business split percentages to suppliers automatically by considering various parameters like demand, inventory, and quote details. The tool can do benchmark comparison for EMS owner parts and has a built-in logic to analyze Bill of Material cost. Automation includes 60+ analytical reports for better analysis. ",
      benefits:
        "A one-stop solution for connecting various stakeholders and integrating various supply chain costing processes. Time, Effort, errors, email flow & cost holes have been reduced drastically. The tool gives the customer better productivity, data accountability, and clarity on costing analysis. ",
    },
    {
      id: 4,
      title: "Claims Solutions",
      challenge:
        "The foremost challenge of Claims Management is that it is time-consuming and often a less focused area in any organization. Every organization spends a considerable amount on claims every quarter and we understand from our expertise that organizations do not have any control over the amount or have the time to validate the claims. The main challenge at validating the claims is the need for manual effort (multiple Excel files and lack of automation), managing a lot of emails (No common tool for multiple stakeholders), no defined validation process, lack of time for detailed analysis (Duration of 1 to 2 Wk./qtr.), and difficult to retrieve historical data (Improper record). High claim volume ($ 4 Million/Qtr.), various claims (More than 10+ various Claims), and multiple stakeholders (Difficult to Track claim status.,) ",
      proposal:
        "InESS has proposed and deployed a Claims Management Tool to handle various claims from EMS (Reval, freight, PPV) which has a high capability to read various input files from contract manufacturers to support validation and a well-defined process to validate and approve easily. When it comes to multiple stakeholders we provide a secured login for EMS, clients, and other stakeholders. The validation is automated (quantity validation, price verification, demand verification, and business split verification). Delta Calculation uses actual vs estimated, which helps the approver to make decisions easier, Notifications such as automated email alerts and tool notifications are sent to stakeholders. EMS receives the final settlement summary. ",
      benefits:
        " A one-stop solution for providing a deep and well-defined Validation process for each claim, to improve the validation and help in optimizing the claim value. Through our automation tool, the manual effort is considerably reduced and the tool will serve as a single point of communication. Various analyses are being performed in the tool like stock verification and excess stock analysis, which are needed to validate the claims. Automated Discrepancy report is generated in minimum time for analysis. There is a clear track status which is easy to identify claim status. There is also a storage of claim data and better visualization of data. ",
    },
    {
      id: 5,
      title: "Integrated QualityManagement(iQuMS)",
      challenge:
        "The foremost challenge of Quality Management is that a non-structured quality analysis process comes with limited traceability of product/ board level quality issues and involves more manual efforts. They lack a structured “RCA process”, documentation, and a lot of redundant or duplicate efforts. There is usually no integrated quality tracking system for management visibility with standard quality methodologies and communication to other stakeholders. ",
      proposal:
        "InESS deploInESS has proposed and deployed an integrated Quality Management (iQuMS) tool that helps customers to overcome the above-mentioned challenges by integrating all quality issues and providing actionable information for stakeholders. This is an integrated, structured quality process like 8D/5D & supplier corrective action SCAR request (SCAR). It’s an easy-to-use tool and connected to existing customers’ PLM, ERP systems and provides a holistic/systemic approach to address the quality issues. The tool can assign action items to internal stakeholders & external partner stakeholders. This structured quality process is driven by higher efficiency and lessons learned captured for each event reduce/eliminate redundant or duplicate effort.yed an integrated Quality Management (iQuMS) tool helps customers to overcome above mentioned challenges by integrating all Quality issues and provides actionable information for stakeholders. This integrated, structured Quality process like 8D/5D & Supplier corrective action SCAR request (SCAR). It’s an Easy to use tool and connected to existing customer’s PLM, ERP system and provides a holistic/systemic approach to address the Quality issues. Tool has the ability to assign action items to internal Stakeholders & External Partner Stakeholders. This structured Quality Process driven by higher efficiency and Lessons learned captured for each event reduce/eliminate redundant or duplicate effort. ",
      benefits:
        "A one-stop solution to track all quality issues with issue and resolution details for future reference with an integrated cycle time tracker. This provides clear traceability and visibility of the quality issue with resolution details. This tool helps for slicing and dicing the quality issues data using 8D methodology to arrive at facts-based actionable information. This connects to internal and external stakeholders with inbuilt communication and tracking of the quality issues in a single place. The tool also has integrated supplier corrective action request SCAR. The tool has executive-level cockpit views and user-level dashboards. Lessons learned captured for each quality issue will be archived for future reference to avoid duplicate efforts. ",
    },
    {
      id: 6,
      title: "Spend Optimization",
      challenge:
        "Commodity Management is predominantly quoting process, business share to suppliers, BOM cost analysis, and reports were manually done through Excel and not through any legacy tools which consumed more manual effort and time due to which chances of manual error were high. Some customers also maintain an improper supplier contact database which results in more cost holes. ",
      proposal:
        "InESS analyzed the customer part number portfolio, identified the top spend parts, validated their supplier risk, historical part quality record, demand details, Quote details, and suggested the value for money business share for each supplier. For all the single source / multi-source parts, equivalent alternative parts & new suppliers also have been suggested for single-source / multi-source to avoid business continuity risk. ",
      benefits:
        "We saved $4.2 MillioWe saved $4.2 Million per annum after reassessment on business share allocation by considering various parameters and we have identified alternate parts for 1000+ customer parts which were equivalent to $50 Mn.n per annum after reassessment on business share allocation by considering various parameters and we have identified alternate parts for 1000+ customer parts which was equivalent to $50 Mn. ",
    },
  ];

  return (
    <div>
      <div className="solutions_bg h-96">
        <Header />

        <section className="flex justify-evenly items-center h-72 ">
          <div className="text-white space-y-4">
            <h1 className="font-bold text-6xl text-center">Our CaseStudy</h1>

            <h6 className="text-center">
              Enable our strategic customers to focus on product technology
              innovations and NPI, <br /> and allow them to align their Core,
            </h6>
          </div>
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 place-items-center p-6  ">
        <div className="">
          <Image
            src="https://img.freepik.com/free-vector/hand-drawn-business-strategy_23-2149164272.jpg"
            width={500}
            height={400}
          />
        </div>
        <div className="my-auto">
          <p className="leading-7 text-base">
            Enable our strategic customers to focus on product technology
            innovations and NPI, and allow them to align their Core, internal
            resources to their high value-add next-generation product
            development and strategic initiatives, instead of utilizing their
            internal resources to “Run the Business” which can be performed by
            Context resources.
          </p>
        </div>
      </section>

        <section className="bg-[#002233]">
          <div className="grid grid-cols-2 sm:grid-cols-1 place-content-center h-screen place-items-center">
            <div className="space-y-4">
              {data.map(({ id, title }) => (
                <h4
                  key={id}
                  onClick={() => setdata_id(id)}
                  className="p-4 cursor-pointer w-96 text-lg font-bold text-start rounded-lg flex items-center bg-white "
                >
                  {title}
                </h4>
              ))}
            </div>

            <div className="">
              <CaseStudyList
                id={data[data_id - 1].id}
                title={data[data_id - 1].title}
                challenge={data[data_id - 1].challenge}
                proposal={data[data_id - 1].proposal}
                benefits={data[data_id - 1].benefits}
              />
            </div>
          </div>
        </section>



        <Footer />
      </div>


  
    </div>
  );
}

export default CaseStudy;
