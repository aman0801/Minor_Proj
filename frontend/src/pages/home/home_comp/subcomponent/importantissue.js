import React from 'react'
import Button from 'react-bootstrap/Button';
export default function importantissue() {

    const websiteList = [
        'General Election to the Legislative Assembly of Karnataka-Pre-certification ',
        'General Elections to the Legislative Assemblies of Meghalaya, ',
        'Advisory on prediction of results - regarding. ',
        'General Elections to the Legislative Assemblies of Himachal Pradesh',
        'Media Coverage during the period referred to in Section 126A of'
    ];

    const websiteUrlList = [
        'https://eci.gov.in/files/file/14866-general-election-to-the-legislative-assembly-of-karnataka-pre-certification-of-political-advertisements-in-print-media-on-the-day-of-poll-one-day-prior-to-poll-reg/',
        'https://eci.gov.in/files/file/14813-general-elections-to-the-legislative-assemblies-of-meghalaya-nagaland-tripura-and%C2%A0bye-elections-to-6-legislative-assemblies-constituencies-of-arunachal-pradesh%C2%A0jharkhand-tamil-nadu-west-bengal-maharashtra-exit-poll-regarding/',
        'https://eci.gov.in/files/file/14647-advisory-on-prediction-of-results-regarding/',
        'https://eci.gov.in/files/file/14636-general-elections-to-the-legislative-assemblies-of-himachal-pradesh-and-gujarat-and-bye-elections-to-the-legislative-assemblies-and-parliamentary-constituency-in-various-states-exit-poll%C2%A0%E2%80%93%C2%A0regarding/',
        'https://eci.gov.in/files/file/14575-media-coverage-during-the-period-referred-to-in-section-126a-of-rp-act-1951-violations-regarding/'
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
            <Button variant="primary">View More Issues</Button>{' '}
        </div>
    )
}
