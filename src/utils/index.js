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
    // Map submenu items to their dedicated routes
    'CaseStudies': '/case-studies',
    'CallToAction': '/call-to-action',
    'BlogKnowledgeHub': '/blog-knowledge-hub'
  };
  
  return pageMap[pageName] || '/';
};
