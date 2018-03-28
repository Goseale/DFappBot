@echo off
title -=Selfbot=-
:1
cls
node selfbot.js
echo.
echo ===================================
echo      A crash has been spoted.
echo ===================================
echo.
pause
goto :1