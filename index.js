document.addEventListener('DOMContentLoaded', function() {
    console.log('Restaurant index page loaded.');
    //calender
    const calendarEl = document.getElementById('calendar');
    const calendarElTd = calendarEl.querySelector('td');
    //mouseenter event
    calendarEl.addEventListener('mouseenter', () => {
        calendarEl.style.cursor = 'pointer';
        calendarElTd.textContent = 'Open Calendar';
        calendarEl.style.backgroundColor = '#f0f0f0';
        calendarEl.style.fontWeight = 'bold';
    });

    //mouseleave event
    calendarEl.addEventListener('mouseleave', () => {
        calendarElTd.textContent = '📅 Open Calendar';
        calendarEl.style.backgroundColor = '';
        calendarEl.style.fontWeight = '';
    });

    //calender rendering
//     const calendarBody = document.getElementById('calendar-body');

// // Example data: days to close and offers
// const closedDays = ['2025-12-25', '2025-12-31']; // YYYY-MM-DD
// const offerDays = ['2025-12-20', '2025-12-21']; // YYYY-MM-DD

// function generateCalendar(year, month) {
//     calendarBody.innerHTML = '';
    
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     let date = 1;
//     for (let i = 0; i < 6; i++) { // max 6 weeks
//         const row = document.createElement('tr');

//         for (let j = 0; j < 7; j++) {
//             const cell = document.createElement('td');
            
//             if (i === 0 && j < firstDay) {
//                 cell.textContent = '';
//             } else if (date > daysInMonth) {
//                 cell.textContent = '';
//             } else {
//                 const fullDate = `${year}-${String(month+1).padStart(2,'0')}-${String(date).padStart(2,'0')}`;
                
//                 cell.textContent = date;

//                 if (closedDays.includes(fullDate)) {
//                     cell.classList.add('closed');
//                     cell.textContent += ' ❌';
//                 } else if (offerDays.includes(fullDate)) {
//                     cell.classList.add('offer');
//                     cell.textContent += ' 🎉';
//                 }

//                 // Highlight today
//                 const today = new Date();
//                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                     cell.classList.add('today');
//                 }

//                 date++;
//             }
//             row.appendChild(cell);
//         }

//         calendarBody.appendChild(row);

//         if (date > daysInMonth) break;
//     }
// }

// // Initialize current month
// const now = new Date();
// generateCalendar(now.getFullYear(), now.getMonth());


    //get element
    const yearSpan = document.getElementById('year');
    //set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});