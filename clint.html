<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تليجرام - الهواري للتعارف والزواج</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="icon" href="22.jpg" type="image/jpeg">

    <style>
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #0e1621; }
      ::-webkit-scrollbar-thumb { background: #232e3c; border-radius: 4px; }
      
      .telegram-bg {
        background-color: #0e1621;
        background-image: radial-gradient(#17212b 1px, transparent 1px);
        background-size: 20px 20px;
      }
    </style>
</head>
<body class="bg-[#0e1621] text-[#f5f5f5] h-[100dvh] flex flex-col font-sans relative overflow-hidden telegram-bg">

    <!-- رأس المحادثة على طراز تليجرام -->
    <header class="bg-[#17212b] border-b border-[#232e3c] px-4 py-2.5 flex items-center justify-between z-10 shrink-0 shadow-sm">
        <div class="flex items-center gap-3">
            <div class="relative cursor-pointer">
                <img src="22.jpg" alt="الهواري" class="w-10 h-10 rounded-full object-cover border border-[#2b5278]">
                <span id="headerStatusDot" class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#17212b] rounded-full"></span>
            </div>
            <div>
                <h3 class="font-bold text-white text-sm">الهواري للتعارف والزواج</h3>
                <span id="headerStatusText" class="text-[11px] text-[#6ab2f2] font-medium">متصل الآن</span>
            </div>
        </div>
        
        <div class="flex items-center gap-2">
            <button onclick="startCall()" class="w-10 h-10 hover:bg-[#232e3c] text-[#8796a5] hover:text-white rounded-full flex items-center justify-center transition" title="مكالمة صوتية">
                <i class="fa-solid fa-phone text-sm"></i>
            </button>
            <span id="clientDisplayHeader" class="text-xs bg-[#232e3c] text-[#8796a5] px-3 py-1.5 rounded-full hidden sm:inline-block"></span>
        </div>
    </header>

    <!-- صندوق عرض الرسائل (على شكل تليجرام) -->
    <div id="chatMessages" class="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col max-w-4xl w-full mx-auto z-10">
        <div class="text-center text-[#8796a5] my-auto text-xs bg-[#17212b]/80 p-5 rounded-xl border border-[#232e3c] shadow-lg max-w-sm mx-auto">
            <img src="22.jpg" alt="Logo" class="w-14 h-14 mx-auto rounded-full object-cover mb-2 border border-[#2b5278]">
            <p class="font-bold text-white mb-1">خدمة العملاء - تليجرام المباشر</p>
            <p class="text-[11px]">محادثتك مشفرة ومؤمنة بالكامل.</p>
        </div>
    </div>

    <!-- شريط الإرسال (Telegram Input Bar) -->
    <footer class="bg-[#17212b] border-t border-[#232e3c] p-3 z-10 shrink-0">
        <form id="messageForm" onsubmit="sendMessage(event)" class="max-w-4xl mx-auto flex items-center gap-2">
            <input id="messageInput" type="text" placeholder="اكتب رسالة..." 
                   class="flex-1 bg-[#212f3d] text-white px-4 py-2.5 rounded-full text-sm focus:outline-none placeholder-[#8796a5]" autocomplete="off">
            <button type="submit" class="w-11 h-11 bg-[#2b5278] hover:bg-[#386d9d] text-white rounded-full flex items-center justify-center transition shrink-0 shadow">
                <i class="fa-solid fa-paper-plane text-sm"></i>
            </button>
        </form>
    </footer>

    <!-- نافذة إدخال البيانات الأولية (البدء) -->
    <div id="nameModal" class="fixed inset-0 bg-[#0e1621]/95 z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-[#17212b] border border-[#232e3c] w-full max-w-md rounded-2xl p-6 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
            <div class="flex flex-col items-center text-center mb-4">
                <img src="22.jpg" alt="Logo" class="w-16 h-16 rounded-full object-cover mb-2 border-2 border-[#2b5278]">
                <h3 class="text-base font-bold text-white mb-1">تسجيل الدخول - تليجرام الهواري</h3>
                <p class="text-xs text-[#8796a5]">أدخل بياناتك لفتح حساب ومراسلة الإدارة فوراً</p>
            </div>
            
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-semibold text-[#8796a5] mb-1">الاسم الكامل <span class="text-red-400">*</span></label>
                    <input id="userNameInput" type="text" placeholder="مثال: أحمد محمود" class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#2b5278]">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8796a5] mb-1">رقم الهاتف <span class="text-red-400">*</span></label>
                    <input id="userPhoneInput" type="tel" placeholder="مثال: 01012345678" class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-[#8796a5] mb-1">العمر <span class="text-red-400">*</span></label>
                        <input id="userAgeInput" type="number" placeholder="28" min="18" max="80" class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-4 py-2.5 rounded-xl text-xs">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-[#8796a5] mb-1">الجنس</label>
                        <select id="userGenderInput" class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-3 py-2.5 rounded-xl text-xs">
                            <option value="ذكر">ذكر</option>
                            <option value="أنثى">أنثى</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8796a5] mb-1">بلد الإقامة والمدينة <span class="text-red-400">*</span></label>
                    <input id="userLocationInput" type="text" placeholder="مصر، القاهرة" class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-4 py-2.5 rounded-xl text-xs">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-[#8796a5] mb-1">ما الذي تبحث عنه؟ (اختياري)</label>
                    <textarea id="userBioInput" rows="2" placeholder="شريكة الحياة المناسبة..." class="w-full bg-[#212f3d] border border-[#232e3c] text-white px-4 py-2 rounded-xl text-xs resize-none"></textarea>
                </div>
                <button onclick="saveUserName()" class="w-full bg-[#2b5278] hover:bg-[#386d9d] text-white py-3 rounded-xl text-xs font-semibold transition shadow mt-2">
                    بدء المراسلة (Telegram Connect)
                </button>
            </div>
        </div>
    </div>

    <!-- شاشة المكالمات الصوتية بتصميم تليجرام -->
    <div id="callScreen" class="fixed inset-0 bg-[#0e1621]/95 z-50 hidden flex-col items-center justify-between p-8 text-white">
        <div class="flex flex-col items-center mt-12">
            <div class="w-28 h-28 bg-[#17212b] rounded-full flex items-center justify-center overflow-hidden mb-4 border-2 border-[#2b5278] shadow-2xl animate-pulse">
                <img src="22.jpg" class="w-full h-full object-cover">
            </div>
            <h2 id="callStatusText" class="text-lg font-bold mb-1">جارِ الاتصال...</h2>
            <p class="text-xs text-[#8796a5]" id="callTimer">00:00</p>
        </div>
        
        <div class="flex items-center gap-6 mb-12">
            <button id="muteBtn" onclick="toggleMute()" class="w-14 h-14 bg-[#17212b] hover:bg-[#232e3c] rounded-full flex items-center justify-center text-lg transition hidden border border-[#232e3c]" title="كتم الصوت">
                <i id="muteIcon" class="fa-solid fa-microphone"></i>
            </button>
            
            <button id="answerCallBtn" onclick="answerIncomingCall()" class="w-16 h-16 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center text-xl transition hidden animate-bounce" title="الرد">
                <i class="fa-solid fa-phone"></i>
            </button>

            <button onclick="endCall()" class="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-xl transition" title="إنهاء">
                <i class="fa-solid fa-phone-slash"></i>
            </button>
            <button id="speakerBtn" onclick="toggleSpeaker()" class="w-14 h-14 bg-[#17212b] hover:bg-[#232e3c] rounded-full flex items-center justify-center text-lg transition hidden border border-[#232e3c]" title="مكبر الصوت">
                <i id="speakerIcon" class="fa-solid fa-volume-high"></i>
            </button>
        </div>
    </div>
    
    <audio id="remoteAudio" autoplay playsinline></audio>
    <audio id="ringAudio" src="ran.mp3" preload="auto" loop></audio>
    <audio id="msgSound" src="mes.mp3" preload="auto"></audio>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
        import { getDatabase, ref, push, onValue, set, remove, onDisconnect } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCVZQ3DTRr_7c5q3CmPRzt3ai1KX80F0C0",
            authDomain: "marry-55604.firebaseapp.com",
            databaseURL: "https://marry-55604-default-rtdb.firebaseio.com",
            projectId: "marry-55604",
            storageBucket: "marry-55604.firebasestorage.app",
            messagingSenderId: "524067560260",
            appId: "1:524067560260:web:adc87a02eadf098d5a5511"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        let currentClientKey = localStorage.getItem('telegram_hawary_key');
        let originalDisplayName = localStorage.getItem('telegram_hawary_name');
        
        let isMuted = false, isSpeakerOn = true, callTimerInterval = null, secondsElapsed = 0;
        let peerConnection = null, localStream = null, incomingOfferData = null, cachedIceServers = null;

        async function getMeteredIceServers() {
            if (cachedIceServers) return cachedIceServers;
            try {
                const response = await fetch("https://alhwary.metered.live/api/v1/turn/credentials?apiKey=6079dfbbdcf8564255625baf8471629ed765");
                if (!response.ok) throw new Error();
                cachedIceServers = await response.json();
                return cachedIceServers;
            } catch (error) {
                return { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
            }
        }

        const messagesContainer = document.getElementById("chatMessages");
        const ringAudio = document.getElementById("ringAudio");
        const msgSound = document.getElementById("msgSound");

        window.addEventListener('DOMContentLoaded', () => {
            if (currentClientKey && originalDisplayName) {
                document.getElementById("nameModal").classList.add("hidden");
                document.getElementById("clientDisplayHeader").innerText = originalDisplayName;
                initChatSession(currentClientKey, originalDisplayName);
                listenForIncomingCalls(currentClientKey);
                setupUserPresence(currentClientKey);
            } else {
                document.getElementById("nameModal").classList.remove("hidden");
                document.getElementById("nameModal").classList.add("flex");
            }
        });

        function setupUserPresence(clientKey) {
            const userStatusRef = ref(db, `single_chat_room/${clientKey}/status`);
            set(userStatusRef, "online");
            onDisconnect(userStatusRef).set("offline");
        }

        window.saveUserName = function() {
            const inputVal = document.getElementById("userNameInput").value.trim();
            const phoneVal = document.getElementById("userPhoneInput").value.trim();
            const ageVal = document.getElementById("userAgeInput").value.trim();
            const locationVal = document.getElementById("userLocationInput").value.trim();
            const bioVal = document.getElementById("userBioInput").value.trim();

            if (!inputVal || !phoneVal || !ageVal || !locationVal) { alert("يرجى ملء الحقول الإجبارية"); return; }

            originalDisplayName = inputVal;
            currentClientKey = inputVal.replace(/\s+/g, '_') + '_' + Math.floor(Math.random() * 900000);
            
            localStorage.setItem('telegram_hawary_key', currentClientKey);
            localStorage.setItem('telegram_hawary_name', originalDisplayName);

            set(ref(db, `single_chat_room/${currentClientKey}/client_info`), {
                name: originalDisplayName, phone: phoneVal, age: ageVal, location: locationVal, bio: bioVal
            });

            document.getElementById("nameModal").classList.add("hidden");
            document.getElementById("clientDisplayHeader").innerText = originalDisplayName;

            initChatSession(currentClientKey, originalDisplayName);
            listenForIncomingCalls(currentClientKey);
            setupUserPresence(currentClientKey);

            const welcomeMsg = `مرحباً، أنا ${originalDisplayName}. هاتف: ${phoneVal} - العمر: ${ageVal} - الإقامة: ${locationVal}`;
            push(ref(db, 'single_chat_room/' + currentClientKey), { text: welcomeMsg, sender: originalDisplayName, senderRole: "client", timestamp: Date.now() });
        };

        function initChatSession(clientKey, displayName) {
            onValue(ref(db, 'single_chat_room/' + clientKey), (snapshot) => {
                messagesContainer.innerHTML = '';
                if (snapshot.exists()) {
                    snapshot.forEach((child) => {
                        if(['call','fcm_token','status','client_info','lockedBy','assignedTo'].includes(child.key)) return;
                        const msg = child.val();
                        if(msg && msg.text) {
                            appendMessageToUI(msg.text, msg.sender || displayName, msg.timestamp, (msg.senderRole === 'client' || msg.sender === displayName));
                        }
                    });
                }
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
        }

        window.sendMessage = async function(event) {
            event.preventDefault();
            const inputField = document.getElementById("messageInput");
            const text = inputField.value.trim();
            if (!text || !currentClientKey) return;

            await push(ref(db, 'single_chat_room/' + currentClientKey), { text, sender: originalDisplayName, senderRole: "client", timestamp: Date.now() });
            inputField.value = "";
        };

        function appendMessageToUI(text, sender, timestamp, isClientMsg) {
            const timeNow = timestamp ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'الآن';
            const html = isClientMsg 
                ? `<div class="flex flex-col items-end w-full mb-1"><div class="bg-[#2b5278] text-white p-2.5 px-3.5 rounded-2xl rounded-tr-none max-w-md text-xs shadow"><span class="break-words">${escapeHtml(text)}</span><span class="block text-[9px] text-[#8796a5] mt-1 text-left">${timeNow}</span></div></div>`
                : `<div class="flex flex-col items-start w-full mb-1"><div class="bg-[#182533] text-white p-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-md text-xs shadow border border-[#232e3c]"><span class="block text-[10px] text-[#6ab2f2] font-bold mb-0.5">${escapeHtml(sender)} (الإدارة)</span><span class="break-words">${escapeHtml(text)}</span><span class="block text-[9px] text-[#8796a5] mt-1 text-left">${timeNow}</span></div></div>`;
            messagesContainer.insertAdjacentHTML('beforeend', html);
        }

        window.startCall = async function() {
            showCallScreen("جارِ الاتصال...", false);
            try {
                localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                await createPeerConnection(currentClientKey);
                localStream.getTracks().forEach(t => peerConnection.addTrack(t, localStream));
                const offer = await peerConnection.createOffer();
                await peerConnection.setLocalDescription(offer);
                await set(ref(db, `single_chat_room/${currentClientKey}/call`), { offer: { type: offer.type, sdp: offer.sdp }, caller: 'client' });
            } catch (e) { alert("خطأ في الميكروفون"); closeCallUI(); }
        };

        function listenForIncomingCalls(clientKey) {
            onValue(ref(db, `single_chat_room/${clientKey}/call`), async (snapshot) => {
                const data = snapshot.val();
                if (!data) { closeCallUI(); return; }
                if (data.caller === 'employee' && !data.answer) {
                    incomingOfferData = data.offer;
                    showCallScreen("مكالمة واردة...", true);
                    ringAudio.play().catch(e => {});
                }
                if (data.answer && peerConnection && !peerConnection.currentRemoteDescription) {
                    if (!ringAudio.paused) ringAudio.pause();
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
                    startTimer();
                }
            });
            listenForCandidates(clientKey);
        }

        window.answerIncomingCall = async function() {
            if (!ringAudio.paused) ringAudio.pause();
            document.getElementById("answerCallBtn").classList.add("hidden");
            document.getElementById("muteBtn").classList.remove("hidden");
            document.getElementById("speakerBtn").classList.remove("hidden");
            try {
                localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                await createPeerConnection(currentClientKey);
                localStream.getTracks().forEach(t => peerConnection.addTrack(t, localStream));
                await peerConnection.setRemoteDescription(new RTCSessionDescription(incomingOfferData));
                const answer = await peerConnection.createAnswer();
                await peerConnection.setLocalDescription(answer);
                await set(ref(db, `single_chat_room/${currentClientKey}/call/answer`), { type: answer.type, sdp: answer.sdp });
                startTimer();
            } catch (e) { closeCallUI(); }
        };

        async function createPeerConnection(roomKey) {
            if (peerConnection) return;
            const config = await getMeteredIceServers();
            peerConnection = new RTCPeerConnection(config);
            peerConnection.onicecandidate = e => { if (e.candidate) push(ref(db, `single_chat_room/${roomKey}/call/candidates`), e.candidate.toJSON()); };
            peerConnection.ontrack = e => { document.getElementById("remoteAudio").srcObject = e.streams[0]; };
        }

        function listenForCandidates(roomKey) {
            onValue(ref(db, `single_chat_room/${roomKey}/call/candidates`), snap => {
                snap.forEach(c => { if (peerConnection && c.val()) peerConnection.addIceCandidate(new RTCIceCandidate(c.val())).catch(e => {}); });
            });
        }

        function showCallScreen(text, incoming) {
            document.getElementById("callScreen").classList.remove("hidden");
            document.getElementById("callScreen").classList.add("flex");
            document.getElementById("callStatusText").innerText = text;
            secondsElapsed = 0;
            if (incoming) {
                document.getElementById("answerCallBtn").classList.remove("hidden");
                document.getElementById("muteBtn").classList.add("hidden");
            } else {
                document.getElementById("answerCallBtn").classList.add("hidden");
                document.getElementById("muteBtn").classList.remove("hidden");
            }
        }

        function startTimer() {
            if (callTimerInterval) clearInterval(callTimerInterval);
            callTimerInterval = setInterval(() => {
                secondsElapsed++;
                document.getElementById("callTimer").innerText = `${Math.floor(secondsElapsed/60).toString().padStart(2,'0')}:${(secondsElapsed%60).toString().padStart(2,'0')}`;
            }, 1000);
        }

        window.endCall = function() {
            if (!ringAudio.paused) ringAudio.pause();
            if (currentClientKey) remove(ref(db, `single_chat_room/${currentClientKey}/call`));
            closeCallUI();
        };

        function closeCallUI() {
            if (!ringAudio.paused) ringAudio.pause();
            document.getElementById("callScreen").classList.remove("flex");
            document.getElementById("callScreen").classList.add("hidden");
            if (callTimerInterval) clearInterval(callTimerInterval);
            if (localStream) localStream.getTracks().forEach(t => t.stop());
            if (peerConnection) { peerConnection.close(); peerConnection = null; }
        }

        window.toggleMute = function() {
            isMuted = !isMuted;
            if (localStream) localStream.getAudioTracks()[0].enabled = !isMuted;
            document.getElementById("muteIcon").className = isMuted ? "fa-solid fa-microphone-slash text-red-400" : "fa-solid fa-microphone";
        };

        window.toggleSpeaker = function() {
            isSpeakerOn = !isSpeakerOn;
            document.getElementById("remoteAudio").muted = !isSpeakerOn;
        };

        function escapeHtml(str) {
            return str ? str.toString().replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])) : '';
        }
    </script>
</body>
</html>
