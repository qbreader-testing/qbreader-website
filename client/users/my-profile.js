window.onload = () => {
    fetch('/auth/get-profile')
        .then(response => response.json())
        .then(data => {
            document.getElementById('username').innerHTML = data.user.username;
            document.getElementById('email').innerHTML = data.user.email;
            if (data.user.verifiedEmail) {
                document.getElementById('email-verified').innerHTML = 'Yes';
                document.getElementById('email-verification-span').classList.add('d-none');
            } else {
                document.getElementById('email-verified').innerHTML = 'No';
            }
        });

    fetch('/auth/get-stats')
        .then(response => {
            if (response.status === 401) {
                throw new Error('Unauthorized');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            if (data.queries) {
                const recentQueries = document.getElementById('recent-queries');
                data.queries.forEach(query => {
                    const li = document.createElement('li');
                    li.innerHTML = `${query.query.queryString} (timestamp: ${query.createdAt})`;
                    recentQueries.appendChild(li);
                });
            }

            if (data.bestBuzz && data.bestBuzz.tossup) {
                const tossup = data.bestBuzz.tossup;
                const buzzPoint = Math.floor((1 - data.bestBuzz.celerity) * tossup.question.length);
                tossup.question = `${tossup.question.slice(0, buzzPoint)} <span class="text-highlight">(#)</span> ${tossup.question.slice(buzzPoint)}`;
                document.getElementById('best-buzz').innerHTML = `
                    <p>Celerity: ${data.bestBuzz.celerity}</p>
                    <div class="card my-2">
                        <div class="card-header">
                            <b>${tossup.setName} | ${tossup.category} | ${tossup.subcategory} ${tossup.alternate_subcategory ? ' (' + tossup.alternate_subcategory + ')' : ''} | ${tossup.difficulty}</b>
                            <b class="float-end">Packet ${tossup.packetNumber} | Question ${tossup.questionNumber}</b>
                        </div>
                        <div class="card-container" id="question-${tossup._id}">
                            <div class="card-body">
                                <span>${tossup.question}</span>&nbsp;
                                <hr></hr>
                                <div><b>ANSWER:</b> ${tossup.formatted_answer ?? tossup.answer}</div>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${tossup.packetName ? 'Packet ' + tossup.packetName : '&nbsp;'}</small>
                                <small class="text-muted float-end">
                                    <a href="#" onClick={onClick} id="report-question-${tossup._id}" data-bs-toggle="modal" data-bs-target="#report-question-modal">
                                        Report Question
                                    </a>
                                </small>
                            </div>
                        </div>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};


document.getElementById('email-verification-link').addEventListener('click', async () => {
    await fetch('/auth/send-verification-email');
    document.getElementById('email-verification-span').classList.add('d-none');
    document.getElementById('email-verification-confirmation').classList.remove('d-none');
});


document.getElementById('logout').addEventListener('click', () => {
    fetch('/auth/logout', {
        method: 'POST',
    }).then(() => {
        localStorage.removeItem('username');
        window.location.href = '/users/login';
    });
});
