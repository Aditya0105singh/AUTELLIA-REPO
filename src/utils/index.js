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
    'Perspectives': '/perspectives',
    // Map submenu items to the Perspectives page until dedicated routes exist
    'CaseStudies': '/perspectives',
    'CallToAction': '/perspectives',
    'BlogKnowledgeHub': '/perspectives'
  };
  
  return pageMap[pageName] || '/';
};
