import React, { useEffect, useState } from 'react';

import axios from 'axios';

useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    .then(
})