// 서브메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    const submenuToggles = document.querySelectorAll('.has-submenu');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                const isVisible = submenu.style.display !== 'none';
                submenu.style.display = isVisible ? 'none' : 'block';
                const toggleIcon = this.querySelector('.submenu-toggle');
                if (toggleIcon) {
                    toggleIcon.textContent = isVisible ? '▼' : '▲';
                }
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
