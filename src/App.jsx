import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'

// Import Pages
import Platform from '../Pages/Platform.jsx'
import Solutions from '../Pages/Solutions.jsx'
import AIMLIntegration from '../Pages/AIMLIntegration.jsx'
import AutomationConsulting from '../Pages/AutomationConsulting.jsx'
import BOTDevelopment from '../Pages/BOTDevelopment.jsx'
import ProcessOptimization from '../Pages/ProcessOptimization.jsx'
import DataAnalytics from '../Pages/DataAnalytics.jsx'
import DocumentProcessing from '../Pages/DocumentProcessing.jsx'
import SoftwareDevelopment from '../Pages/SoftwareDevelopment.jsx'
import CloudAutomation from '../Pages/CloudAutomation.jsx'
import ManagedServices from '../Pages/ManagedServices.jsx'
import Careers from '../Pages/Careers.jsx'
import Demo from '../Pages/Demo.jsx'
import Perspectives from '../Pages/Perspectives.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Platform /></Layout>} />
        <Route path="/platform" element={<Layout><Platform /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/automation-consulting" element={<Layout><AutomationConsulting /></Layout>} />
        <Route path="/bot-development" element={<Layout><BOTDevelopment /></Layout>} />
        <Route path="/aiml-integration" element={<Layout><AIMLIntegration /></Layout>} />
        <Route path="/process-optimization" element={<Layout><ProcessOptimization /></Layout>} />
        <Route path="/data-analytics" element={<Layout><DataAnalytics /></Layout>} />
        <Route path="/document-processing" element={<Layout><DocumentProcessing /></Layout>} />
        <Route path="/software-development" element={<Layout><SoftwareDevelopment /></Layout>} />
        <Route path="/cloud-automation" element={<Layout><CloudAutomation /></Layout>} />
        <Route path="/managed-services" element={<Layout><ManagedServices /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/demo" element={<Layout><Demo /></Layout>} />
        <Route path="/perspectives" element={<Layout><Perspectives /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
