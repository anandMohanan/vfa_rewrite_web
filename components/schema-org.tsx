import React from 'react';

const SchemaOrg = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "V Automate",
        "alternateName": ["vautomate", "v automate"],
        "url": "https://vautomate.ai",
        "description": "Transform your business with intelligent API agents. Seamlessly integrate 100+ APIs into your LLM applications."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default SchemaOrg;
