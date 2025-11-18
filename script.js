document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultContent = document.getElementById('default-content');
    const jupyterContent = document.getElementById('jupyter-content');
    const libraryContent = document.getElementById('library-content');
    const librarySubmenu = document.getElementById('library-submenu');
    const libraryDefault = document.getElementById('library-default');
    const pandasContent = document.getElementById('pandas-content');
    const matplotlibContent = document.getElementById('matplotlib-content');
    const requestsContent = document.getElementById('requests-content');
    const beautifulsoup4Content = document.getElementById('beautifulsoup4-content');
    const mlContent = document.getElementById('ml-content');
    const dataSitesContent = document.getElementById('data-sites-content');
    const mlSubmenu = document.getElementById('ml-submenu');
    const mlDefault = document.getElementById('ml-default');
    const supervisedContent = document.getElementById('supervised-content');
    const unsupervisedContent = document.getElementById('unsupervised-content');
    const reinforcementContent = document.getElementById('reinforcement-content');
    const datatypesContent = document.getElementById('datatypes-content');
    const datatypesSubmenu = document.getElementById('datatypes-submenu');
    const datatypesDefault = document.getElementById('datatypes-default');
    const basicContent = document.getElementById('basic-content');
    const sequenceContent = document.getElementById('sequence-content');
    const mappingContent = document.getElementById('mapping-content');
    const setContent = document.getElementById('set-content');
    const arrayContent = document.getElementById('array-content');
    const seriesContent = document.getElementById('series-content');
    
    // 초기 로드 시 활성화된 메뉴에 맞는 콘텐츠 표시
    const activeMenu = document.querySelector('.menu-item.active');
    if (activeMenu) {
        const menuType = activeMenu.getAttribute('data-menu');
        if (menuType === 'jupyter') {
            defaultContent.style.display = 'none';
            jupyterContent.style.display = 'block';
            libraryContent.style.display = 'none';
            mlContent.style.display = 'none';
            dataSitesContent.style.display = 'none';
        } else if (menuType === 'data-sites') {
            defaultContent.style.display = 'none';
            jupyterContent.style.display = 'none';
            libraryContent.style.display = 'none';
            mlContent.style.display = 'none';
            dataSitesContent.style.display = 'block';
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
                        dataSitesContent.style.display = 'none';
                        datatypesContent.style.display = 'none';
                        libraryContent.style.display = 'block';
                        libraryDefault.style.display = 'block';
                        pandasContent.style.display = 'none';
                        matplotlibContent.style.display = 'none';
                        requestsContent.style.display = 'none';
                        beautifulsoup4Content.style.display = 'none';
                    } else if (menuType === 'ml') {
                        defaultContent.style.display = 'none';
                        jupyterContent.style.display = 'none';
                        libraryContent.style.display = 'none';
                        dataSitesContent.style.display = 'none';
                        datatypesContent.style.display = 'none';
                        mlContent.style.display = 'block';
                        mlDefault.style.display = 'block';
                        supervisedContent.style.display = 'none';
                        unsupervisedContent.style.display = 'none';
                        reinforcementContent.style.display = 'none';
                    } else if (menuType === 'datatypes') {
                        defaultContent.style.display = 'none';
                        jupyterContent.style.display = 'none';
                        libraryContent.style.display = 'none';
                        mlContent.style.display = 'none';
                        dataSitesContent.style.display = 'none';
                        datatypesContent.style.display = 'block';
                        datatypesDefault.style.display = 'block';
                        basicContent.style.display = 'none';
                        sequenceContent.style.display = 'none';
                        mappingContent.style.display = 'none';
                        setContent.style.display = 'none';
                        arrayContent.style.display = 'none';
                        seriesContent.style.display = 'none';
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
                dataSitesContent.style.display = 'none';
                datatypesContent.style.display = 'none';
                if (librarySubmenu) librarySubmenu.style.display = 'none';
                if (mlSubmenu) mlSubmenu.style.display = 'none';
                if (datatypesSubmenu) datatypesSubmenu.style.display = 'none';
            } else if (menuType === 'data-sites') {
                defaultContent.style.display = 'none';
                jupyterContent.style.display = 'none';
                libraryContent.style.display = 'none';
                mlContent.style.display = 'none';
                dataSitesContent.style.display = 'block';
                datatypesContent.style.display = 'none';
                if (librarySubmenu) librarySubmenu.style.display = 'none';
                if (mlSubmenu) mlSubmenu.style.display = 'none';
                if (datatypesSubmenu) datatypesSubmenu.style.display = 'none';
            } else {
                defaultContent.style.display = 'block';
                jupyterContent.style.display = 'none';
                libraryContent.style.display = 'none';
                mlContent.style.display = 'none';
                dataSitesContent.style.display = 'none';
                datatypesContent.style.display = 'none';
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
            if (submenuType === 'pandas' || submenuType === 'matplotlib' || submenuType === 'requests' || submenuType === 'beautifulsoup4') {
                libraryDefault.style.display = 'none';
                pandasContent.style.display = submenuType === 'pandas' ? 'block' : 'none';
                matplotlibContent.style.display = submenuType === 'matplotlib' ? 'block' : 'none';
                requestsContent.style.display = submenuType === 'requests' ? 'block' : 'none';
                beautifulsoup4Content.style.display = submenuType === 'beautifulsoup4' ? 'block' : 'none';
            }
            
            // 머신러닝 서브메뉴 처리
            if (submenuType === 'supervised' || submenuType === 'unsupervised' || submenuType === 'reinforcement') {
                mlDefault.style.display = 'none';
                supervisedContent.style.display = submenuType === 'supervised' ? 'block' : 'none';
                unsupervisedContent.style.display = submenuType === 'unsupervised' ? 'block' : 'none';
                reinforcementContent.style.display = submenuType === 'reinforcement' ? 'block' : 'none';
            }
            
            // 자료형 서브메뉴 처리
            if (submenuType === 'basic' || submenuType === 'sequence' || submenuType === 'mapping' || submenuType === 'set' || submenuType === 'array' || submenuType === 'series') {
                datatypesDefault.style.display = 'none';
                basicContent.style.display = submenuType === 'basic' ? 'block' : 'none';
                sequenceContent.style.display = submenuType === 'sequence' ? 'block' : 'none';
                mappingContent.style.display = submenuType === 'mapping' ? 'block' : 'none';
                setContent.style.display = submenuType === 'set' ? 'block' : 'none';
                arrayContent.style.display = submenuType === 'array' ? 'block' : 'none';
                seriesContent.style.display = submenuType === 'series' ? 'block' : 'none';
            }
        });
    });
});

// Jupyter 설정 스크립트 다운로드 함수
function downloadJupyterScript() {
    const scriptContent = `import os
import subprocess
import sys
import json

# 1. requirements.txt 생성
packages = ["pandas", "matplotlib", "numpy", "requests", "beautifulsoup4", "jupyter", "posco-lp"]
with open("requirements.txt", "w") as f:
    for pkg in packages:
        f.write(pkg + "\\n")

# 2. lp.ipynb 생성
lp_notebook = {
  "cells": [
    {
      "cell_type": "code",
      "metadata": {},
      "source": [
        "from poscolp import LP\\n",
        "lp_id = ''\\n",
        "lp_pw = ''\\n",
        "lp = LP(lp_id, lp_pw)"
      ],
      "outputs": [],
      "execution_count": None
    }
  ],
  "metadata": {
    "kernelspec": {
      "display_name": "Python 3",
      "language": "python",
      "name": "python3"
    },
    "language_info": {
      "codemirror_mode": {"name": "ipython","version": 3},
      "file_extension": ".py",
      "mimetype": "text/x-python",
      "name": "python",
      "nbconvert_exporter": "python",
      "pygments_lexer": "ipython3",
      "version": "3.12.0"
    }
  },
  "nbformat": 4,
  "nbformat_minor": 5
}
with open("lp.ipynb", "w", encoding="utf-8") as f:
    json.dump(lp_notebook, f, ensure_ascii=False, indent=2)

# 3. 가상환경 디렉터리
venv_dir = "myenv"

# 4. 가상환경 생성
if not os.path.exists(venv_dir):
    subprocess.check_call([sys.executable, "-m", "venv", venv_dir])

# 5. 가상환경 내 python 경로 (윈도우용)
python_venv = os.path.join(venv_dir, "Scripts", "python.exe")

# 6. pip 업그레이드
subprocess.check_call([python_venv, "-m", "pip", "install", "--upgrade", "pip"])

# 7. requirements.txt에 있는 패키지 설치
subprocess.check_call([python_venv, "-m", "pip", "install", "-r", "requirements.txt"])

# 8. 주피터 노트북 실행 안내 (자동 실행은 주석 처리)
#print("주피터 노트북을 자동으로 실행합니다...")
#subprocess.check_call([python_venv, "-m", "notebook"])

print("가상환경 및 패키지 설치가 완료되었습니다.")
print("다음 명령어로 가상환경을 활성화하고 주피터 노트북을 수동으로 실행하세요:")
print(f"{venv_dir}\\\\Scripts\\\\activate.bat")
print("그리고")
print("jupyter notebook")
`;

    const blob = new Blob([scriptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'setup_and_run_jupyter.py';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

