// Data Destinasi Wisata Kediri
const destinasiWisata = [
    {
        id: 1,
        nama: "Gunung Kelud",
        kategori: "Alam",
        deskripsi: "Gunung berapi aktif dengan kawah indah dan pemandangan spektakuler. Cocok untuk pendakian dan fotografi.",
        lokasi: "Ngancar, Kediri",
        rating: 4.7,
        gambar: "./images/kelud.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Gunung+Kelud+Kediri",
        jamBuka: "24 Jam",
        hargaTiket: "Rp 10.000",
        fasilitas: "Area parkir, warung makan, toilet, pos pendakian"
    },
    {
        id: 2,
        nama: "Air Terjun Irenggolo",
        kategori: "Alam",
        deskripsi: "Air terjun setinggi 40 meter dengan kolam alami yang jernih. Tempat yang sempurna untuk refreshing.",
        lokasi: "Besuki, Kediri",
        rating: 4.5,
        gambar: "./images/air terjun ir.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Air+Terjun+Irenggolo+Kediri",
        jamBuka: "08:00 - 17:00 WIB",
        hargaTiket: "Rp 5.000",
        fasilitas: "Area parkir, gazebo, toilet, warung"
    },
    {
        id: 3,
        nama: "Taman Wisata Selomangleng",
        kategori: "Rekreasi",
        deskripsi: "Taman kota dengan kolam renang, area bermain anak, dan spot foto menarik.",
        lokasi: "Mojoroto, Kediri",
        rating: 4.3,
        gambar: "./images/taman selo.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Selomangleng+Kediri",
        jamBuka: "06:00 - 18:00 WIB",
        hargaTiket: "Rp 3.000",
        fasilitas: "Kolam renang, taman bermain, food court, mushola"
    },
    {
        id: 4,
        nama: "Candi Surawana",
        kategori: "Sejarah",
        deskripsi: "Candi peninggalan Kerajaan Majapahit dengan relief yang masih terawat. Cocok untuk wisata edukasi.",
        lokasi: "Canggu, Kediri",
        rating: 4.4,
        gambar: "./images/surowono.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Candi+Surawana+Kediri",
        jamBuka: "08:00 - 16:00 WIB",
        hargaTiket: "Rp 5.000",
        fasilitas: "Museum kecil, area parkir, toilet, guide"
    },
    {
        id: 5,
        nama: "Goa Selomangleng",
        kategori: "Alam",
        deskripsi: "Goa alami dengan stalaktit dan stalakmit yang indah. Pengalaman petualangan yang mengesankan.",
        lokasi: "Mojoroto, Kediri",
        rating: 4.2,
        gambar: "./images/goa selomangkleng.jpg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Goa+Selomangleng+Kediri",
        jamBuka: "08:00 - 17:00 WIB",
        hargaTiket: "Rp 7.000",
        fasilitas: "Pemandu lokal, penerangan goa, area parkir"
    },
    {
        id: 6,
        nama: "Monumen Simpang Lima Gumul",
        kategori: "Landmark",
        deskripsi: "Monumen ikonik Kediri dengan arsitektur megah menyerupai Arc de Triomphe Paris.",
        lokasi: "Ngasem, Kediri",
        rating: 4.6,
        gambar: "./images/slg.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Simpang+Lima+Gumul+Kediri",
        jamBuka: "24 Jam",
        hargaTiket: "Gratis",
        fasilitas: "Area parkir luas, taman, spot foto, cafe"
    },
    {
        id: 7,
        nama: "Kampung Inggris Pare",
        kategori: "Edukasi",
        deskripsi: "Pusat pembelajaran bahasa Inggris terbesar di Indonesia dengan berbagai kursus berkualitas.",
        lokasi: "Pare, Kediri",
        rating: 4.8,
        gambar: "./images/kmpung inggris.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Kampung+Inggris+Pare+Kediri",
        jamBuka: "07:00 - 21:00 WIB",
        hargaTiket: "Gratis (biaya kursus terpisah)",
        fasilitas: "Lembaga kursus, homestay, cafe, toko buku"
    },
    {
        id: 8,
        nama: "Gumul Paradise Island",
        kategori: "Rekreasi",
        deskripsi: "Taman air modern dengan berbagai wahana seru untuk keluarga dan anak-anak.",
        lokasi: "Kediri",
        rating: 4.4,
        gambar: "./images/paradise island.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Gumul+Paradise+Island+Sumberejo+Kediri",
        jamBuka: "09:00 - 17:00 WIB",
        hargaTiket: "Rp 35.000",
        fasilitas: "Kolam renang, water slide, food court, loker"
    },
    {
        id: 9,
        nama: "Museum Airlangga",
        kategori: "Sejarah",
        deskripsi: "Museum yang menyimpan koleksi sejarah Kerajaan Airlangga dan peninggalan bersejarah lainnya.",
        lokasi: "Kediri Kota",
        rating: 4.1,
        gambar: "./images/arilangga.jpeg",
        koordinat: "https://www.google.com/maps/search/?api=1&query=Museum+Airlangga+Kediri",
        jamBuka: "08:00 - 16:00 WIB",
        hargaTiket: "Rp 5.000",
        fasilitas: "Ruang pameran, perpustakaan, guide, parkir"
    }
];

// Generate Destinasi Cards
function generateDestinasiCards() {
    const grid = document.getElementById('destinasiGrid');
    grid.innerHTML = '';
    
    destinasiWisata.forEach(destinasi => {
        const card = document.createElement('div');
        card.className = 'destinasi-card';
        card.innerHTML = `
            <img src="${destinasi.gambar}" alt="${destinasi.nama}" class="card-image">
            <div class="card-content">
                <span class="card-category">${destinasi.kategori}</span>
                <h3 class="card-title">${destinasi.nama}</h3>
                <p class="card-description">${destinasi.deskripsi}</p>
                <div class="card-info">
                    <span class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${destinasi.lokasi}
                    </span>
                    <span class="card-rating">
                        <i class="fas fa-star"></i>
                        ${destinasi.rating}
                    </span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => showModal(destinasi));
        grid.appendChild(card);
    });
}

// Generate Location Buttons
function generateLocationButtons() {
    const container = document.getElementById('locationButtons');
    container.innerHTML = '';
    
    destinasiWisata.forEach(destinasi => {
        const button = document.createElement('button');
        button.className = 'location-btn';
        button.textContent = destinasi.nama;
        button.addEventListener('click', () => {
            window.open(destinasi.koordinat, '_blank');
        });
        container.appendChild(button);
    });
}

// Modal Functions
function showModal(destinasi) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${destinasi.gambar}" alt="${destinasi.nama}" class="modal-image">
        <h2 class="modal-title">${destinasi.nama}</h2>
        <span class="card-category">${destinasi.kategori}</span>
        <p style="margin: 1rem 0; color: var(--text-light); line-height: 1.8;">
            ${destinasi.deskripsi}
        </p>
        <div class="modal-details">
            <div class="modal-detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span><strong>Lokasi:</strong> ${destinasi.lokasi}</span>
            </div>
            <div class="modal-detail-item">
                <i class="fas fa-clock"></i>
                <span><strong>Jam Buka:</strong> ${destinasi.jamBuka}</span>
            </div>
            <div class="modal-detail-item">
                <i class="fas fa-ticket-alt"></i>
                <span><strong>Harga Tiket:</strong> ${destinasi.hargaTiket}</span>
            </div>
            <div class="modal-detail-item">
                <i class="fas fa-star"></i>
                <span><strong>Rating:</strong> ${destinasi.rating}/5</span>
            </div>
            <div class="modal-detail-item">
                <i class="fas fa-info-circle"></i>
                <span><strong>Fasilitas:</strong> ${destinasi.fasilitas}</span>
            </div>
        </div>
        <button class="location-btn" onclick="window.open('${destinasi.koordinat}', '_blank')" style="width: 100%; margin-top: 1rem;">
            <i class="fas fa-directions"></i> Lihat di Google Maps
        </button>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Navigation Toggle
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

// Smooth Scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            }
        });
    });
}

// Scroll Animation
function scrollAnimation() {
    const cards = document.querySelectorAll('.destinasi-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    generateDestinasiCards();
    generateLocationButtons();
    smoothScroll();
    
    // Burger menu
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleNav);
    
    // Modal close
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Scroll animation after slight delay
    setTimeout(scrollAnimation, 100);
    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});