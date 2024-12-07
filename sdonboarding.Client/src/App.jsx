import { useEffect, useState, Component } from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { NavMenu } from './components/Navmenu/NavMenu';
import { StoreTable } from './components/Stores/StoreTable';
import { CustomerTable } from './components/customers/CustomerTable';

function App() {
  return (
    <>
      <h1>MVP Studio Onboarding</h1>
      <p className="read-the-docs">
        Using Vite + React
      </p>
      
      <CustomerTable />
      <StoreTable />
    </>
  )
}

export default App;