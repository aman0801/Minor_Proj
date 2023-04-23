import React from 'react'
import Button from 'react-bootstrap/Button';
export default function pressrelease() {

    const websiteList = [
        'General Election to the Legislative Assembly of Karnataka,2023-Media Coverage during the period referred to in Section 126 of the R.P Act,1951',
        'General Election to Legislative Assembly of Karnataka, 2023 Party',
        'Schedule for Bye-election to clear vacancies of 1(one) ',
        'ECI hosts the 3rd International Conference on ‘Inclusive',
        'Withdrawal of recognition of status of state party in West Bengal of the'
      ];

    const websiteUrlList = [
        'https://eci.gov.in/files/file/14867-general-election-to-the-legislative-assembly-of-karnataka2023-media-coverage-during-the-period-referred-to-in-section-126-of-the-rp-act1951/',
        'https://eci.gov.in/files/file/14863-general-election-to-legislative-assembly-of-karnataka-2023/',
        'https://eci.gov.in/files/file/14862-schedule-for-bye-election-to-clear-vacancies-of-1one-parliamentary-constituency-of-punjab-and-3-three-legislative-assemblies-of-odisha-and-uttar-pradesh-and-1-adjourned-poll-in-meghalaya/',
        'https://eci.gov.in/files/file/14887-withdrawal-of-recognition-of-status-of-state-party-in-manipur-of-the-people%E2%80%99s-democratic-alliance/',
        'https://eci.gov.in/files/file/14848-eci-hosts-the-3rd-international-conference-on-%E2%80%98inclusive-elections-and-elections-integrity%E2%80%99-as-the-lead-for-the-cohort-on-%E2%80%98election-integrity%E2%80%99/'
    ];

  return (
    <div>
       
      <ul>
        {websiteList.map((website, index) => {
          const name = website.slice(0, website.indexOf(','));
          const year = website.slice(website.indexOf(',') + 2, website.indexOf('-'));
          return (
            <div key={index}>
              <a href={websiteUrlList[index]}> <span className="link-text"><br />{name}<br /></span></a>
            </div>
          );
        })}
      </ul>
      <Button variant="primary">View More Press Release</Button>{' '}
    </div>
  )
}
