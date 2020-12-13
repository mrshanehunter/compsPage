import React from 'react';
import Header from "../components/Header";
import Layout from "../components/Layout";
import ContactSheet from "../components/ContactSheet";

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
    
    <Layout>
    <Header headerText="Contact"/>
   <ContactSheet />
    </Layout>
    </div>
   
  )
}