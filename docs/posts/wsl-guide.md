---
date: 2024-01-20
category:
  - WSL
  - Windows
tag:
  - WSL
  - Linux
  - Windows
  - 开发环境
---

# WSL 入门使用教程

## 什么是 WSL？

WSL（Windows Subsystem for Linux）是 Windows 系统提供的 Linux 子系统，可以在 Windows 中原生运行 Linux 二进制可执行文件。与传统虚拟机不同，WSL 与 Windows 共享文件系统，启动速度快，资源占用少，非常适合开发者在 Windows 环境下使用 Linux 命令行工具。

## WSL 2 vs WSL 1

| 特性 | WSL 1 | WSL 2 |
|------|-------|-------|
| 架构 |  Linux 系统调用转换层 | 轻量级虚拟机 |
| 性能 | 文件 I/O 更快 | 系统调用兼容性好 |
| 文件 I/O | 更快 | 稍慢 |
| Docker 支持 | 需额外配置 | 原生支持 |
| 内存占用 | 更少 | 稍多 |

建议优先使用 WSL 2，已获得更好的 Linux 兼容性和性能。

## 安装 WSL

### 前提条件

- Windows 10 版本 2004 或更高
- Windows 11

### 简单安装方法

以管理员身份打开 PowerShell 或命令提示符，执行：

```bash
wsl --install
```

此命令会自动安装 WSL 2 和 Ubuntu 默认发行版。

### 分步安装

如果需要自定义安装，可以分步执行：

```bash
# 1. 启用 WSL 功能
wsl --install --no-default-distribution

# 2. 查看可用发行版
wsl --list --online

# 3. 安装指定发行版
wsl --install -d Ubuntu-22.04
```

### 常用发行版

```bash
Ubuntu              # 最新稳定版
Ubuntu-22.04        # Ubuntu 22.04 LTS
Ubuntu-20.04        # Ubuntu 20.04 LTS
Debian              # Debian
 kali-linux         # Kali Linux
```

## 基础配置

### 初始化

首次启动 Linux 发行版时，会提示创建用户账户和密码：

```bash
# 输入用户名
Enter new UNIX username: yourname

# 输入密码
Enter new UNIX password: ********

# 确认密码
Retype new UNIX password: ********
```

### 更新软件包

```bash
sudo apt update && sudo apt upgrade -y
```

### 配置 root 密码

```bash
sudo passwd root
```

## WSL 基本命令

```bash
# 查看已安装的发行版
wsl --list --verbose

# 查看运行中的发行版
wsl --list --running

# 启动指定发行版
wsl -d Ubuntu-22.04

# 关闭指定发行版
wsl --terminate Ubuntu-22.04

# 关闭所有发行版
wsl --shutdown

# 卸载发行版
wsl --unregister Ubuntu-22.04
```

## 文件系统访问

### 从 Windows 访问 Linux 文件

在文件资源管理器地址栏输入：

```
\\wsl$
```

或直接在 Linux 终端中打开 Windows 文件管理器：

```bash
# 在当前目录打开文件管理器
explorer.exe .

# 打开 Windows 桌面
explorer.exe ~/../
```

### 从 Linux 访问 Windows 文件

Windows 磁盘挂载在 `/mnt/` 目录下：

```bash
# 访问 C 盘
cd /mnt/c

# 访问 D 盘
cd /mnt/d

# 访问用户目录
cd /mnt/c/Users/YourName
```

### Windows 与 Linux 文件互访注意事项

- Windows 文件在 Linux 中性能较差，避免在 Linux 中直接操作 `/mnt/` 下的文件
- 建议在 Linux home 目录（`~`）中工作
- 重要项目可放在 Linux 文件系统中以获得更好的性能

## 开发环境配置

### 安装常用工具

```bash
# 安装 Git
sudo apt install git

# 安装 curl
sudo apt install curl

# 安装 vim
sudo apt install vim

# 安装 zsh（可选）
sudo apt install zsh

# 切换默认 shell
chsh -s /bin/zsh
```

### 安装 Node.js

```bash
# 通过 nvm 安装（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts

# 或直接通过 apt 安装
sudo apt install nodejs npm
```

### 安装 Python

```bash
# 安装 Python 和 pip
sudo apt install python3 python3-pip

# 验证安装
python3 --version
pip3 --version
```

### 安装 Docker（WSL 2 中）

```bash
# 安装 Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 添加当前用户到 docker 组
sudo usermod -aG docker $USER

# 启动 Docker 服务
sudo service docker start

# 验证安装
docker --version
```

## 配置开发工具

### 安装 VS Code 远程开发

1. 在 Windows 中安装 VS Code
2. 安装 "WSL" 扩展
3. 在 Linux 终端中输入：

```bash
code .
```

VS Code 会自动连接 WSL，可以在 Linux 环境中进行开发。

### Git 配置

```bash
# 配置用户名和邮箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 设置默认分支名
git config --global init.defaultBranch main

# 设置默认编辑器
git config --global core.editor vim
```

### SSH 配置

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "your.email@example.com"

# 启动 SSH 服务
sudo service ssh start

# 设置开机自启（可选）
sudo systemctl enable ssh
```

## 高级配置

### 调整 WSL 2 内存限制

WSL 2 默认会占用最多 50% 的系统内存。可以通过创建 `.wslconfig` 文件来调整：

在 Windows 用户目录（如 `C:\Users\YourName`）创建 `.wslconfig` 文件：

```ini
[wsl2]
memory=8GB
processors=4
localhostForwarding=true
```

保存后重启 WSL：

```bash
wsl --shutdown
```

### 设置默认发行版

```bash
wsl --set-default Ubuntu-22.04
```

### 导入导出发行版

```bash
# 导出发行版
wsl --export Ubuntu-22.04 D:\wsl-backups\ubuntu22.tar

# 导入发行版
wsl --import Ubuntu-22.04 D:\wsl\ubuntu22 D:\wsl-backups\ubuntu22.tar
```

## 常见问题

### WSL 安装失败

确保 Windows 已更新到最新版本，并以管理员身份运行 PowerShell。

### 启动报错 "The operation timed out"

```bash
wsl --shutdown
wsl --update
wsl --boot
```

### 访问网络缓慢

在 `.wslconfig` 中启用 `localhostForwarding`：

```ini
[wsl2]
localhostForwarding=true
```

### 中文显示乱码

```bash
# 安装中文语言包
sudo apt install language-pack-zh-hans

# 设置环境变量
echo "export LANG=zh_CN.UTF-8" >> ~/.bashrc
source ~/.bashrc
```

## 最佳实践

1. **工作目录选择**：在 Linux 文件系统（`~`）中创建项目，避免使用 `/mnt/c`
2. **定期备份**：使用 `wsl --export` 备份重要数据
3. **保持更新**：定期在 Linux 中执行 `sudo apt update && sudo apt upgrade`
4. **合理分配资源**：根据需要调整 `.wslconfig` 中的内存和 CPU 配置
5. **使用 Zsh**：安装 zsh 和 oh-my-zsh 提供更好的终端体验

## 总结

WSL 为 Windows 开发者提供了便捷的 Linux 环境，无需双系统或虚拟机即可使用 Linux 命令行工具。结合 VS Code 等开发工具，可以获得接近原生的开发体验。

熟练掌握 WSL 的基础命令、文件访问和开发环境配置，将大幅提升开发效率。
