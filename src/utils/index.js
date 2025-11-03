// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  const pageMap = {
    'Platform': '/',
    'Solutions': '/solutions',
    'AutomationConsulting': '/automation-consulting',
    'BOTDevelopment': '/bot-development',
    'AIMLIntegration': '/aiml-integration',
    'ProcessOptimization': '/process-optimization',
    'DataAnalytics': '/data-analytics',
    'DocumentProcessing': '/document-processing',
    'SoftwareDevelopment': '/software-development',
    'CloudAutomation': '/cloud-automation',
    'ManagedServices': '/managed-services',
    'Careers': '/careers',
    'Demo': '/demo',
    'demo': '/demo',
    'Perspectives': '/perspectives',
    // Map submenu items to their dedicated routes
    'CaseStudies': '/case-studies',
    'case-studies': '/case-studies',
    'solutions': '/solutions',
    'case-study-unistrut': '/case-study-unistrut',
    'case-study-healthcare': '/case-study-healthcare', 
    'case-study-travel-counsellors': '/case-study-travel-counsellors',
    'case-study-euromaster': '/case-study-euromaster',
    'case-study-nlp-query-bot': '/case-study-nlp-query-bot',
    'CallToAction': '/call-to-action',
    'BlogKnowledgeHub': '/blog-knowledge-hub',
    // Legal pages
    'TermsOfService': '/terms-of-service',
    'PrivacyPolicy': '/privacy-policy',
    // Thank you page
    'ThankYou': '/thank-you'
  };
  
  return pageMap[pageName] || '/';
};
