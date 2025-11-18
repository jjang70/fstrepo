document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultContent = document.getElementById('default-content');
    const jupyterContent = document.getElementById('jupyter-content');
    const libraryContent = document.getElementById('library-content');
    const librarySubmenu = document.getElementById('library-submenu');
    const libraryDefault = document.getElementById('library-default');
    const pandasContent = document.getElementById('pandas-content');
    const matplotlibContent = document.getElementById('matplotlib-content');
    const mlContent = document.getElementById('ml-content');
    const mlSubmenu = document.getElementById('ml-submenu');
    const mlDefault = document.getElementById('ml-default');
    const supervisedContent = document.getElementById('supervised-content');
    const unsupervisedContent = document.getElementById('unsupervised-content');
    const reinforcementContent = document.getElementById('reinforcement-content');
    
    // 초기 로드 시 활성화된 메뉴에 맞는 콘텐츠 표시
    const activeMenu = document.querySelector('.menu-item.active');
    if (activeMenu) {
        const menuType = activeMenu.getAttribute('data-menu');
        if (menuType === 'jupyter') {
            defaultContent.style.display = 'none';
            jupyterContent.style.display = 'block';
            libraryContent.style.display = 'none';
        }
    }
    
    // 메인 메뉴 클릭 이벤트
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                return;
            }
            
            // 서브메뉴 토글은 별도 처리
            if (this.classList.contains('has-submenu')) {
                e.stopPropagation();
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    const isVisible = submenu.style.display !== 'none';
                    submenu.style.display = isVisible ? 'none' : 'block';
                    const toggle = this.querySelector('.submenu-toggle');
                    if (toggle) {
                        toggle.textContent = isVisible ? '▼' : '▲';
                    }
                    
                    // 다른 메뉴 비활성화 및 서브메뉴 닫기
                    menuItems.forEach(m => {
                        if (m !== this && !m.classList.contains('submenu-item')) {
                            m.classList.remove('active');
                            const otherSubmenu = m.nextElementSibling;
                            if (otherSubmenu && otherSubmenu.classList.contains('submenu')) {
                                otherSubmenu.style.display = 'none';
                                const otherToggle = m.querySelector('.submenu-toggle');
                                if (otherToggle) {
                                    otherToggle.textContent = '▼';
                                }
                            }
                        }
                    });
                    this.classList.add('active');
                    
                    // 메뉴 타입에 따라 콘텐츠 표시
                    const menuType = this.getAttribute('data-menu');
                    
                    if (menuType === 'library') {
                        defaultContent.style.display = 'none';
                        jupyterContent.style.display = 'none';
                        mlContent.style.display = 'none';
                        libraryContent.style.display = 'block';
                        libraryDefault.style.display = 'block';
                        pandasContent.style.display = 'none';
                        matplotlibContent.style.display = 'none';
                    } else if (menuType === 'ml') {
                        defaultContent.style.display = 'none';
                        jupyterContent.style.display = 'none';
                        libraryContent.style.display = 'none';
                        mlContent.style.display = 'block';
                        mlDefault.style.display = 'block';
                        supervisedContent.style.display = 'none';
                        unsupervisedContent.style.display = 'none';
                        reinforcementContent.style.display = 'none';
                    }
                }
                return;
            }
            
            // 일반 메뉴 클릭 처리
            // 모든 메뉴에서 active 클래스 제거
            menuItems.forEach(m => {
                if (!m.classList.contains('submenu-item')) {
                    m.classList.remove('active');
                }
            });
            
            // 클릭한 메뉴에 active 클래스 추가
            this.classList.add('active');
            
            // 메뉴에 따라 콘텐츠 표시
            const menuType = this.getAttribute('data-menu');
            
            if (menuType === 'jupyter') {
                defaultContent.style.display = 'none';
                jupyterContent.style.display = 'block';
                libraryContent.style.display = 'none';
                mlContent.style.display = 'none';
                if (librarySubmenu) librarySubmenu.style.display = 'none';
                if (mlSubmenu) mlSubmenu.style.display = 'none';
            } else {
                defaultContent.style.display = 'block';
                jupyterContent.style.display = 'none';
                libraryContent.style.display = 'none';
                mlContent.style.display = 'none';
            }
        });
    });
    
    // 서브메뉴 클릭 이벤트
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            const submenuType = this.getAttribute('data-submenu');
            const parentSubmenu = this.closest('.submenu');
            
            // 같은 서브메뉴 그룹 내에서만 active 제거
            if (parentSubmenu) {
                const sameGroupItems = parentSubmenu.querySelectorAll('.submenu-item');
                sameGroupItems.forEach(sm => sm.classList.remove('active'));
            }
            
            // 클릭한 서브메뉴에 active 추가
            this.classList.add('active');
            
            // 라이브러리 서브메뉴 처리
            if (submenuType === 'pandas' || submenuType === 'matplotlib') {
                libraryDefault.style.display = 'none';
                pandasContent.style.display = submenuType === 'pandas' ? 'block' : 'none';
                matplotlibContent.style.display = submenuType === 'matplotlib' ? 'block' : 'none';
            }
            
            // 머신러닝 서브메뉴 처리
            if (submenuType === 'supervised' || submenuType === 'unsupervised' || submenuType === 'reinforcement') {
                mlDefault.style.display = 'none';
                supervisedContent.style.display = submenuType === 'supervised' ? 'block' : 'none';
                unsupervisedContent.style.display = submenuType === 'unsupervised' ? 'block' : 'none';
                reinforcementContent.style.display = submenuType === 'reinforcement' ? 'block' : 'none';
            }
        });
    });
});

