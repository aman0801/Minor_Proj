import React from 'react'
import './sub.css'
import Button from 'react-bootstrap/Button';
export default function currentissue() {

    const websiteList = [
        'General Election to the Legislative Assembly of Karnataka, 2023-Allotme',
        'Withdrawal of recognition of Communist Party of India as National Party',
        'Withdrawal of recognition of status of state party in Mizoram of the Mi',
        'Withdrawal of recognition of status of state party in Manipur of the Pe',
        'Withdrawal of recognition of status of state party in West Bengal of the'
      ];

    const websiteUrlList = [
        'https://eci.gov.in/files/file/14898-general-election-to-the-legislative-assembly-of-karnataka-2023-allotment-of-broadcast-telecast-time-to-nationalstate-political-parties-reg/',
        'https://eci.gov.in/files/file/14890-withdrawal-of-recognition-of-communist-party-of-india-as-national-party-and-state-party-in-west-bengal-and-odisha/',
        'https://eci.gov.in/files/file/14888-withdrawal-of-recognition-of-status-of-state-party-in-mizoram-of-the-mizoram-people%E2%80%99s-conference/',
        'https://eci.gov.in/files/file/14887-withdrawal-of-recognition-of-status-of-state-party-in-manipur-of-the-people%E2%80%99s-democratic-alliance/',
        'https://eci.gov.in/files/file/14886-withdrawal-of-recognition-of-status-of-state-party-in-west-bengal-of-the-revolutionary-socialist-party/'
    ];





  return (
    <div>
      <ul>
        {websiteList.map((website, index) => {
          const name = website.slice(0, website.indexOf(','));
          const year = website.slice(website.indexOf(',') + 2, website.indexOf('-'));
          return (
            <>
            <div key={index}>
              <a href={websiteUrlList[index]}> <span className="link-text"><br />{name}<br /></span></a>
            </div>
            
            </>
          );
        })}
      </ul>
      <Button variant="primary">View More Issues</Button>{' '}
    </div>
  )
}
// style={{marginLeft: "-800px"}}