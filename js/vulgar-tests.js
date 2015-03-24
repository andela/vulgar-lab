(function() {
  'use strict';
  describe("Vulgar", function() {

    it('.isVulgar should be undefined for `go hard or go home`, and false after calling .check()', function() {
      var vulgar = new Vulgar('go hard or go home');
      expect(vulgar.isVulgar).toBeUndefined();
      expect(vulgar.check()).toBeFalsy();
      expect(vulgar.isVulgar).toBeFalsy();
    });

    it('.isVulgar should return false for `i love baking soda`', function() {
      var vulgar = new Vulgar('i love baking soda');
      expect(vulgar.check()).toBeFalsy();
      expect(vulgar.isVulgar).toBeFalsy();
    });

    it('.original should return `no NeW friends` for `no NeW friends`', function() {
      var vulgar = new Vulgar('no NeW friends');
      expect(vulgar.original).toBe('no NeW friends');
      expect(vulgar.check()).toBeFalsy();
    });

    it('.isVulgar should return true for `look, another sHitHead`', function() {
      var vulgar = new Vulgar('look, another sHitHead');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.isVulgar).toBeTruthy();
    });

    it('.count should return 1 for `no one likes an asshole anyways`', function() {
      var vulgar = new Vulgar('no one likes an asshole anyways');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.count).toBe(1);
    });

    it('.check() should return true for `fUcK boy`', function() {
      var vulgar = new Vulgar('fUcK boy');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.isVulgar).toBeTruthy();
    });

    it('.fixedSentence() should return `x_X boy` for `fUcK boy`', function() {
      var vulgar = new Vulgar('fUcK boy');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.fixedSentence()).toBe('x_X boy');
    });

    it('.check() should return true for `damn, sHiT got real`', function() {
      var vulgar = new Vulgar('damn, sHiT got real');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.isVulgar).toBeTruthy();
    });

    it('.content should return [\'sHiT\'] for `damn, sHiT got real`', function() {
      var vulgar = new Vulgar('damn, sHiT got real');
      expect(vulgar.isVulgar).toBeUndefined();
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.content).toEqual(['sHiT']);
    });

    it('should return true for `i need to sit the fUCKup, and put my sHiT together`', function() {
      var vulgar = new Vulgar('i need to sit the fUCKup, and put my sHiT together');
      expect(vulgar.original).toBe('i need to sit the fUCKup, and put my sHiT together');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.content).toEqual(['fUCK']);
      expect(vulgar.isVulgar).toBeTruthy();
      expect(vulgar.fixedSentence()).toBe('i need to sit the x_X up, and put my x_X together');
    });

  });
})();