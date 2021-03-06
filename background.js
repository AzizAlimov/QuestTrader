// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'});
  chrome.browserAction.setPopup({popup: 'popup.html'});
});


// Periodically check questrade api to update stocks
var checkInterval = 0.2;
chrome.alarms.create("checkServer", {
    delayInMinutes: checkInterval,
    periodInMinutes: checkInterval
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "checkServer") {
      update();
  }
});

function update() {

}