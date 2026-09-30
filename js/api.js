window.NaijaHelpAPI = (() => {
  const API_BASE = localStorage.getItem("naijahelp_api_base") || window.location.origin;
  async function request(path, options={}) {
    const token=localStorage.getItem("naijahelp_token");
    const headers={"Content-Type":"application/json",...(options.headers||{})};
    if(token) headers.Authorization=`Bearer ${token}`;
    const res=await fetch(`${API_BASE}${path}`,{...options,headers});
    const data=await res.json().catch(()=>({}));
    if(!res.ok) throw new Error(data.error||`Request failed (${res.status})`);
    return data;
  }
  return {
    apiBase:API_BASE,setApiBase:url=>localStorage.setItem("naijahelp_api_base",url),
    register:p=>request("/api/auth/register",{method:"POST",body:JSON.stringify(p)}),
    login:p=>request("/api/auth/login",{method:"POST",body:JSON.stringify(p)}),
    states:()=>request("/api/locations/states"),lgas:id=>request(`/api/locations/states/${id}/lgas`),areas:id=>request(`/api/locations/lgas/${id}/areas`),
    categories:()=>request("/api/categories"),
    providers:p=>{const q=new URLSearchParams(Object.entries(p||{}).filter(([,v])=>v));return request(`/api/providers?${q}`)},
    requests:()=>request("/api/requests"),createRequest:p=>request("/api/requests",{method:"POST",body:JSON.stringify(p)}),
    acceptQuote:id=>request(`/api/quotes/${id}/accept`,{method:"POST"}),
    messages:id=>request(`/api/requests/${id}/messages`),sendMessage:(id,body)=>request(`/api/requests/${id}/messages`,{method:"POST",body:JSON.stringify({body})}),
    bookingStatus:(id,status)=>request(`/api/bookings/${id}/status`,{method:"POST",body:JSON.stringify({status})}),
    providerProfile:()=>request("/api/provider/me"),
    updateProvider:p=>request("/api/provider/me",{method:"PUT",body:JSON.stringify(p)}),
    providerRequests:()=>request("/api/provider/requests"),
    quote:(id,p)=>request(`/api/requests/${id}/quotes`,{method:"POST",body:JSON.stringify(p)}),
    providerJobs:()=>request("/api/provider/jobs"),
    providerCoverage:()=>request("/api/provider/coverage"),
    updateProviderCoverage:areas=>request("/api/provider/coverage",{method:"PUT",body:JSON.stringify({areas})}),
    notifications:()=>request("/api/notifications"),
    markNotificationRead:id=>request(`/api/notifications/${id}/read`,{method:"PATCH"}),
    createPayment:bookingId=>request(`/api/bookings/${bookingId}/payment`,{method:"POST"}),
    initializePayment:bookingId=>request(`/api/bookings/${bookingId}/payment/initialize`,{method:"POST"}),
    getPayment:bookingId=>request(`/api/bookings/${bookingId}/payment`),
    createReview:(bookingId,p)=>request(`/api/bookings/${bookingId}/reviews`,{method:"POST",body:JSON.stringify(p)}),
    providerReviews:id=>request(`/api/providers/${id}/reviews`),
    createReport:p=>request("/api/reports",{method:"POST",body:JSON.stringify(p)}),
    adminReports:()=>request("/api/admin/reports"),
    adminReportUpdate:(id,p)=>request(`/api/admin/reports/${id}`,{method:"PATCH",body:JSON.stringify(p)}),
    submitVerificationDocument:p=>request("/api/provider/documents",{method:"POST",body:JSON.stringify(p)}),
    adminVerificationDocuments:()=>request("/api/admin/verification-documents"),
    adminVerificationUpdate:(id,p)=>request(`/api/admin/verification-documents/${id}`,{method:"PATCH",body:JSON.stringify(p)}),
    adminAuditLogs:()=>request("/api/admin/audit-logs"),
  };
})();
